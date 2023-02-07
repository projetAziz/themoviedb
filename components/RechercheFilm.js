import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from "./Film";
import "../style/recherche.scss";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Populair from "../components/Populair";
import Pagination from "react-js-pagination";
import accueil from "../style/accueil.scss";
import recherche from "../style/recherche.scss";
import Footer from "./Footer";

const RechercheFilm = () => {
  const [films, setRechercheFilm] = useState([]);
  const [length, setLength] = useState([]);
  const [query, setQuery] = useState("");
  const [pageNumber, setpageNumber] = useState("");
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${query}&page=${pageNumber}`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setRechercheFilm(res.data.results);
      setLength(res.data.total_pages);
    });
  }, [query, pageNumber]);

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="cat">
      <div className="container-fluid">
        <div className="recherche">
          <div className="title_recherche">
            <h1 className="title">Rechercher un film</h1>
          </div>

          <div class="box">
            <input className="recherche_place " onChange={onSearch} />
            <i class="fas fa-search icon"></i>
          </div>
        </div>
        <div className="row m-0 text-center">
          <div className="col-12  text-center">
            <div className="fond">
              {query ? (
                <div className="film_resultat container">
                  <h3>Total pages : {Math.floor(length / 10) + 1}</h3>
                  <div className="row m-4 p-3">
                    <div className="col-12 d-flex justify-content-center m-0 p-0">
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
                  <div className="col-lg-12">
                    <div className="movie-img movie-img-recherche">
                      {films.map((film) => (
                        <Film film={film} key={film.id} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="film_recherche">
                  <h4 className="alerte">
                    Aucun résultat, veuillez entrer un mot-clé!
                  </h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="props">
        <div className="propos-contenu">
          <h1 className="propos">Nos propositions</h1>
        </div>
        <Populair />
      </div>
      <Footer />
    </div>
  );
};

export default RechercheFilm;
