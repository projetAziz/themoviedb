import React from "react";
import Accueil from "./pages/Accueil";
import Categorie from "./pages/Categorie";
import Recherche from "./pages/Recherche";
import Actors from "./pages/Actors";
import Details from "./components/Details";
import DetailsActeur from "./components/DetailsActeur";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Accueil} />
        <Route path="/categorie" exact component={Categorie} />
        <Route path="/recherche" exact component={Recherche} />
        <Route path="/actors" exact component={Actors} />
        <Route path="/details" exact component={Details} />
        <Route path="/detailsActeur" exact component={DetailsActeur} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
