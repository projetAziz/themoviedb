import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Film from "../components/Film";
import categorie from "../style/categorie.scss";
import Pagination from "react-js-pagination";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";

const CategorieFilm = ({ idGenre }) => {
  //Afficher Les noms des categories
  const history = useHistory();
  const idCategorie = history.location.state?.id;
  const idParam = idGenre ? idGenre : idCategorie;
  const [Categories, setCategpries] = useState([]);
  const url2 =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=FR";
  useEffect(() => {
    axios.get(url2).then((res) => setCategpries(res.data.genres));
  }, []);

  //Flitre dans les categories

  const [data, setData] = useState([]);
  const [clickedBtn, setclickedBtn] = useState();
  const [pageNumber, setpageNumber] = useState("");
  const [length, setLength] = useState([]);
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=FR&&with_genres=${clickedBtn}&page=${pageNumber}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data.results);
      setLength(res.data.total_pages);
    });
  }, [pageNumber, clickedBtn]);

  //Categories details

  const [categorie, setCategorie] = useState([]);
  const url3 = `https://api.themoviedb.org/3/discover/movie?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=FR&&with_genres=${idGenre}`;
  useEffect(() => {
    axios.get(url3).then((res) => {
      setCategorie(res.data.results);
    });
  }, [idGenre]);

  return (
    <div className="container-fluid ">
      <Navigation />
      <div className=" row cat-complet m-5">
        {idParam ? (
          <div className="container-cat">
            <div className="row categories ">
              <h1 className="text-light text-center p-0 pt-5 mb-5">
                {Categories.filter((categorie) =>
                  categorie.id.toString().includes(idParam)
                ).map((categorie) => categorie.name)}
              </h1>
            </div>

            <div className="row catv2 m-0 p-0 ">
              {categorie.map((film) => (
                <Film film={film} key={film.id} />
              ))}
            </div>
          </div>
        ) : (
          <div className="cat">
            <div className="row m-0">
              <div className="col md-12">
                <h1 className=" text-light text-center p-3">
                  Découvrez nos catégories
                </h1>
              </div>
            </div>
            <div className="row m-0 text-center">
              <div className="col-12  text-center">
                {clickedBtn ? (
                  <div className="container-fluid">
                    <div className="col-12 text-center mb-4 p-0">
                      <h3>Total de pages : {Math.floor(length / 10) + 1}</h3>
                    </div>
                    <div className="row m-0 ">
                      <div className="col-12 d-flex justify-content-center m-0 p-0">
                        <div className="mb-5 ">
                          <Pagination
                            itemClass="page-item"
                            linkClass="page-link"
                            activePage={pageNumber}
                            itemsCountPerPage={10}
                            totalItemsCount={length}
                            pageRangeDisplayed={4}
                            onChange={(event) => setpageNumber(event)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <h4 className="alerte ">
                    Aucun résultat..Veuillez choisir une catégorie!
                    <i class="fas fa-rocket text-light p-1"></i>
                  </h4>
                )}
              </div>
            </div>
            <div className="row m-0 text-center">
              <div className="col-2 ">
                {Categories.map((Categorie) => (
                  <button
                    type="button"
                    className="button-cat"
                    value={Categorie.name}
                    id={Categorie.id}
                    onClick={(event) => {
                      setpageNumber(1);
                      setclickedBtn(event.target.id);
                    }}
                  >
                    {Categorie.name}
                  </button>
                ))}
              </div>
              <div id="show" className="show2">
                <a a href="#show" id="show" className="openBtn">
                  <button className="button-cat-resp">
                    Filtrer par catégorie <i class="fas fa-chevron-down"></i>
                  </button>
                </a>

                <div id="cont">
                  {Categories.map((Categorie) => (
                    <button
                      type="button"
                      className="button-cat_respon"
                      value={Categorie.name}
                      id={Categorie.id}
                      onClick={(event) => setclickedBtn(event.target.id)}
                    >
                      {Categorie.name}
                    </button>
                  ))}

                  <a href="#hide" id="hide" className="closeBtn">
                    <button className="button-close">Fermer</button>
                  </a>
                </div>
              </div>

              <div className="col-sm-10 space">
                <div className="movie-img">
                  {data
                    .filter((film) =>
                      film.genre_ids.includes(Number(clickedBtn))
                    )
                    .map((film) => (
                      <Film film={film} key={film.id} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CategorieFilm;
