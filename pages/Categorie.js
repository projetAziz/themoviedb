import React from "react";
import CategorieFilm from "../components/CategorieFilm";
import categorie from "../style/categorie.scss";

const Categorie = (props) => {
  const id = props.location.state?.id;
  return <CategorieFilm idGenre={id} />;
};

export default Categorie;
