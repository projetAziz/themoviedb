import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from "../components/Film";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import carrousel from "../style/carrousel.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 },
];

const Populair = () => {
  const [films, setFilms] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=en-US";
  useEffect(() => {
    axios.get(url).then((res) => setFilms(res.data.results));
  }, []);

  return (
    <div class="container-fluid">
      <div class="col-12">
        <Carousel breakPoints={breakPoints}>
          {films.map((film) => (
            <Item>
              <Film film={film} key={film.id} />
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Populair;
