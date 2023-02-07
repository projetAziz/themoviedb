import React from "react";
import { useHistory } from "react-router-dom";

const Acteur = (props) => {
  const { acteur } = props;
  const pathImage = "https://image.tmdb.org/t/p/w185/";
  //acteur details
  let historyObj = useHistory();
  function handleClick() {
    historyObj.push("/DetailsActeur");
    historyObj.pathname = acteur.id;
  }

  return (
    <div className="col text-center">
      <div class="actor">
        <img
          className=""
          src={
            acteur.profile_path
              ? pathImage + acteur.profile_path
              : "image-not-found.png"
          }
          alt="acteur"
          onClick={() => handleClick()}
        />
        <div className="">
          <h5 className="text-center text-light m-0 p-2">{acteur.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Acteur;
