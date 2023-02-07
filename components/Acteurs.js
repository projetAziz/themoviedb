import React, { useState, useEffect } from "react";
import axios from "axios";
import Acteur from "./Acteur";
import actor from "../style/actor.scss";

const Acteurs = () => {
  const [acteurs, setActeur] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/278/credits?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=FR`;
  useEffect(() => {
    axios.get(url).then((res) => setActeur(res.data.cast));
  }, []);
  return (
    <div class="actor">
      <div class="row m-0 ">
        <div class="col-12  p-0 ">
          <div className="col-9 mx-auto ">
            <div className="actor-center">
              <div className="row">
                {acteurs.slice(0, 8).map((acteur) => (
                  <Acteur acteur={acteur} key={acteur.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Acteurs;
