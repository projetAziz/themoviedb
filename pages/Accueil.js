import Navigation from "../components/Navigation";
import accueil from "../style/accueil.scss";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Populair from "../components/Populair";
import PlayingNow from "../components/PlayingNow";
import TopRated from "../components/TopRated";
import Acteurs from "../components/Acteurs";
import Actors from "./Actors";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <div className="accueil">
      <Navigation />
      <div className="banner">
        <img src={"b4.png"} className="banner" />
      </div>
      <div className="container-fluid p-2 m ">
        <h1 className="text-light mb-2">
          Films populaires <i class="fas fa-fire icon1"></i>
        </h1>
        <div>{<Populair />}</div>
        <h1 className="text-light mb-2">
          Présentement à l'affiche <i class="fas fa-calendar-check icon2"> </i>{" "}
        </h1>
        <div>
          <PlayingNow />
        </div>
        <h1 className="text-light mb-1">
          Les mieux notés <i class="fas fa-medal icon3"></i>
        </h1>
        <div>
          <TopRated />
        </div>
        <div className=" col-12 text-center">
          <a href="/Categorie">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block p-3  m-0"
            >
              Toutes les catégories
            </button>
          </a>
        </div>
        <div className="actors-slider ">
          <div className="row m-0 p-0 text-center  ">
            <h1 className="text-light ">
              {" "}
              Découvrez les acteurs à travers vos films favoris
            </h1>
            <div className="img-actors">
              <div className="col-12 m-0 p-0">
                <Acteurs />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accueil;
