import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";
import Acteur from "./Acteur";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import detail from "../style/detail.scss";
import Footer from "./Footer";

const Details = () => {
  const historyObj = useHistory();
  const id = historyObj.pathname;
  const imageSize1 = "original";
  const imageSize2 = "w780";
  const imageSize3 = "w1280";

  const pathImage = "https://image.tmdb.org/t/p/";
  //details de film
  const [detailFilm, setDetailFilm] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=FR`;
  useEffect(() => {
    axios.get(url).then((res) => setDetailFilm(res.data));
  }, [id, url]);

  //les acteurs de film

  const [acteurs, setActeur] = useState([]);
  const urlActeur = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=FR`;
  useEffect(() => {
    axios.get(urlActeur).then((res) => setActeur(res.data.cast));
  }, []);

  //Les Categories
  const [categories, setCategpries] = useState([]);
  const urlCategories = `https://api.themoviedb.org/3/movie/${id}?api_key=a083ce90aa029bee14b2aa0bd6af9e65`;
  useEffect(() => {
    axios.get(urlCategories).then((res) => setCategpries(res.data.genres));
  }, [id]);

  //les bande annonce de film

  const [trailer, setTrailer] = useState([]);
  const urlTrailer = `https://api.themoviedb.org/3/movie/${historyObj.pathname}/videos?api_key=a083ce90aa029bee14b2aa0bd6af9e65`;
  useEffect(() => {
    axios.get(urlTrailer).then((res) => {
      setTrailer(res.data.results);
    });
  }, []);
  const key = trailer
    .slice(trailer.length - 1, trailer.length)
    .map((tr) => tr.key);
  const trailerSrc = `https://www.youtube.com/embed/${key}`;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 },
  ];

  const [closeIframe, setCloseIframe] = useState("");
  const close = () => {
    setCloseIframe("hide");
    console.log(closeIframe);
  };

  return (
    <div className="container-fluid ">
      <div className="cat detail-cat">
        <Navigation />
        <div className="p-3 details">
          <div className="row m-0">
            <div className="col-md-8 ">
              <h1 className="my-3 mx-5">{detailFilm.title}</h1>
            </div>
            <div className="col-md-2  my-3 text-center">
              <Popup
                trigger={
                  <button className="btn-bd">
                    <h7
                      onClick={() => {
                        setCloseIframe("show");
                        console.log(closeIframe);
                      }}
                    >
                      Bande annonce
                    </h7>{" "}
                    <i class="fas fa-play-circle"></i>
                  </button>
                }
              >
                <div className={closeIframe}>
                  <button
                    onClick={close}
                    type="button"
                    className="btn-close btn-close-white close"
                    aria-label="Close"
                  ></button>
                  <span aria-hidden="true">&times;</span>
                  <iframe className="iframe" src={trailerSrc}></iframe>
                </div>
              </Popup>
            </div>
          </div>
          <div className="row m-5">
            <div className="col-md-6 ">
              <img
                className="image-detail"
                src={
                  detailFilm.backdrop_path
                    ? pathImage + imageSize2 + detailFilm.backdrop_path
                    : "image-not-found.png"
                }
                alt="film"
              />
            </div>
            <div className="col-xl-6 ">
              <div className="info">
                <ul>
                  <li>
                    <i class="fas fa-calendar-check m-2"></i>
                    {"   "}
                    {detailFilm.release_date}
                  </li>
                  <br></br>
                  <li>
                    <i class="far fa-clock m-2"> </i>
                    {detailFilm.runtime} {"   "}minutes
                  </li>
                  <br></br>
                  <li>
                    <i class="fas fa-clipboard-list fa-xl m-2"></i>
                    Catégorie
                  </li>

                  <br></br>
                  {categories.map((categorie) => (
                    <button
                      className="btn btn-info m-2"
                      key={categories.id}
                      onClick={() =>
                        historyObj.push("/Categorie", { id: categorie.id })
                      }
                    >
                      {categorie.name}
                    </button>
                  ))}
                </ul>
              </div>
              <div className="syn">
                <div className="col-12 col-sm-12 text-light m-0 p-0 ">
                  <h1>Synopsis</h1>
                  {detailFilm.overview}
                </div>
              </div>
            </div>
          </div>
          <div className="carousel">
            <h2 className="text-center m-5">Les acteurs</h2>
            <Carousel breakPoints={breakPoints}>
              {acteurs.map((acteur) => (
                <Item>
                  <Acteur acteur={acteur} key={acteur.id} />
                </Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
