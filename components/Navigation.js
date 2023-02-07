import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navigation from "../style/navigation.scss";
import Logo from "./logo";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="stick">
      <div className="Nav">
        <Container>
          <div className="row">
            <div className="col-lg-auto">
              <Navbar.Brand href="#" className="logo">
                <Logo />
              </Navbar.Brand>
            </div>
            <div className="col">
              <Navbar expand="lg ">
                <div className="row">
                  <div className="col">
                    <Navbar.Toggle
                      className="icon"
                      aria-controls="navbarScroll"
                    />
                    <Navbar.Collapse id="navbar">
                      <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                      ></Nav>

                      <Form className="d-flex">
                        <Navbar.Collapse id="navbarScroll">
                          <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "300px" }}
                            navbarScroll
                          >
                            <Nav.Link href="/" className="navOp">
                              <i class="fas fa-film fa-lg m-2  icon1"> </i>{" "}
                              Accueil
                            </Nav.Link>

                            <Nav.Link href="/Categorie" className="navOp">
                              <i class="fas fa-list fa-lg m-2  icon2"></i> Les
                              catégories
                            </Nav.Link>
                            <Nav.Link href="/Recherche" className="navOp">
                              <i class="fa fa-search fa-lg m-2  icon3"></i>{" "}
                              Recherche
                            </Nav.Link>
                          </Nav>
                        </Navbar.Collapse>
                      </Form>
                    </Navbar.Collapse>
                  </div>
                </div>
              </Navbar>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navigation;
