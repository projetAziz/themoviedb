import React from "react";
import { useHistory } from "react-router-dom";
import accueil from "../style/accueil.scss";

const Film = (props) => {
  const { film } = props;
  const pathImage = "https://image.tmdb.org/t/p/original/";
  //movies details
  let historyObj = useHistory();
  function handleClick() {
    historyObj.push("/Details");
    historyObj.pathname = film.id;
  }

  return (
    <div className="films col">
      {/*  {pathImage + film.backdrop_path} */}
      <img
        className="image"
        src={
          film.poster_path
            ? pathImage + film.poster_path
            : "image-not-found.png"
        }
        alt="film"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Film;
