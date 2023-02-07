import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";
import Film from "./Film";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import actorDetail from "../style/actorDetail.scss";
import Footer from "./Footer";

const DetailsActeur = () => {
  const historyObj = useHistory();
  const id = historyObj.pathname;
  const imageSize1 = "original";
  const imageSize2 = "w780";
  const imageSize3 = "w1280";
  console.log(id);

  const pathImage = "https://image.tmdb.org/t/p/";
  //details de acteur
  const [detailActeur, setDetailActeur] = useState([]);
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=en-US`;
  useEffect(() => {
    axios.get(url).then((res) => setDetailActeur(res.data));
  }, [id, url]);

  //les films d un acteur

  const [films, setFilm] = useState([]);
  const urlFilm = `https://api.themoviedb.org/3/discover/movie?with_cast=${id}&sort_by=release_date.asc&api_key=a083ce90aa029bee14b2aa0bd6af9e65`;
  useEffect(() => {
    axios.get(urlFilm).then((res) => setFilm(res.data.results));
  }, []);

  return (
    <div className="container-fluid">
      <Navigation />
      <div className="m-5 p-3 details">
        <div className="cat">
          <div className="row m-0 pb-4">
            <div className="col-12 text-left">
              <h1>{detailActeur.name}</h1>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-3 col-sm-12 ">
              <img
                className="image2"
                src={
                  detailActeur.profile_path
                    ? pathImage + imageSize2 + detailActeur.profile_path
                    : "image-not-found.png"
                }
                alt="film"
              />
            </div>

            <div className="col-lg-8 m-0 p-0">
              <h5 className="text-light m-0 p-3">
                <i class="fas fa-birthday-cake m-2 "></i>{" "}
                {detailActeur.birthday}
              </h5>

              <h5 className="text-light m-0 p-3">
                <i class="fas fa-home m-2"> </i>
                {detailActeur.place_of_birth}
              </h5>
              <h5 className="text-light m-0 p-3">{detailActeur.death}</h5>
              <div className="bio">
                <h1 className="text-light m-0 p-3">Biographie</h1>
                <p className="text-light m-0 p-3">{detailActeur.biography}</p>
              </div>
            </div>
          </div>

          <div className="caro">
            <Carousel itemsToShow={6}>
              {films.map((film) => (
                <Item>
                  <Film film={film} key={film.id} />
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

export default DetailsActeur;
