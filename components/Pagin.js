import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
import Film from "./Film";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import navigation from "../style/accueil.scss";
import pagin from "../style/pagin.scss";

const Pagin = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setpageNumber] = useState("");
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=a083ce90aa029bee14b2aa0bd6af9e65&language=en-US&page=${pageNumber}`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data.results);
    });
  }, [pageNumber]);

  return (
    <div className="pagination">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-12">
            <Pagination
              itemClass="page-item"
              linkClass="page-link"
              activePage={pageNumber}
              itemsCountPerPage={10}
              totalItemsCount={5000}
              pageRangeDisplayed={20}
              onChange={(event) => setpageNumber(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagin;
