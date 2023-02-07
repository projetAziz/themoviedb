import React from "react";
import Navigation from "../components/Navigation";

import RechercheFilm from "../components/RechercheFilm";
import "../style/recherche.scss";

const Recherche = () => {
  return (
    <div className="">
      <Navigation />
      <div className="">
        <div className="">
          <RechercheFilm />
        </div>
      </div>
    </div>
  );
};

export default Recherche;
