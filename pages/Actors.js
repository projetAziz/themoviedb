import Navigation from "../components/Navigation";
import Acteur from "../components/Acteur";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Actors = () => {
  const [acteurs, setacteurs] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/12/credits?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=en-US";
  useEffect(() => {
    axios.get(url).then((res) => setacteurs(res.data.cast));
  }, []);
  return (
    <div>
      <Navigation />
      <h1>Acteurs</h1>
      <div className="row">
        {acteurs.map((acteur) => (
          <Acteur acteur={acteur} key={acteur.id} />
        ))}
      </div>
    </div>
  );
};

export default Actors;
