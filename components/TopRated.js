import Item from "./Item";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from "./Film";
import Carousel from "react-elastic-carousel";
import topRated from "../style/topRated.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];
const TopRated = () => {
  const [films, setFilms] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=en-US&page=1";
  useEffect(() => {
    axios.get(url).then((res) => setFilms(res.data.results));
  }, []);
  return (
    <div class="container-fluid">
      <div class="col-12">
        <Carousel breakPoints={breakPoints}>
          {films.map((film) => (
            <Item>
              <div className="rated">
                {film.vote_average}
                <div className="icon">
                  <i class="fas fa-medal icon3 p-3 fa-lg"></i>
                </div>
              </div>
              <div className="image3">
                <Film film={film} key={film.id} />
              </div>
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default TopRated;
