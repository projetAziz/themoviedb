import React from "react";
import Logo from "./logo";
import footer from "../style/footer.scss";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row m-0">
        <div className="col-lg-4  text-center text-f">
          <div className="p-1 "></div>
          <Nav.Link href="/" className="navOp">
            <i class="fas fa-film fa-lg m-2  icon1"> </i> Accueil
          </Nav.Link>
          <Nav.Link href="/Categorie" className="navOp">
            <i class="fas fa-list fa-lg m-2  icon2"></i> Les catégories
          </Nav.Link>
          <Nav.Link href="/Recherche" className="navOp">
            <i class="fa fa-search fa-lg m-2  icon3"></i> Recherche
          </Nav.Link>
          <p className="col-lg-12 text-center footerTexte">
            {" "}
            Vous avez des questions? N'hésitez pas à communiquer avec une équipe
            de la même galaxie que vous!<br></br>{" "}
            <i class="fas fa-user-astronaut fa-2x m-0 p-0"></i>
          </p>
        </div>
        <div className="col-lg-4 text-right m-0 text-f ">
          <div class="glass-container">
            <form class="glass-form">
              <h2>Contactez-nous!</h2>
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Courriel" />
              <textarea placeholder="Message" className="textarea" />
              <button type="submit" className="btn-form">
                envoyez
              </button>
              <div class="form-footer"></div>
            </form>
          </div>
        </div>
        <div className="col a2 monster">
          <img src="monster.png" alt="logo" />
        </div>
      </div>
      <div className="row m-0">
        <div className="col-12 text-center copy">
          <h6>©2022 CINEGEEK ALL RIGHTS RESERVED</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
