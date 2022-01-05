import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Modal from "./components/Modal/Modal";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Manga from "./Pages/Manga";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [dataPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [category, setCategory] = useState("");
  const [ageRating, setAgeRating] = useState("");
  const [seasonYear, setSeasonYear] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);
  const [showState, setShowState] = useState(false)

  const { meta, data } = fetchedData;

  const buttonClickedHandler = () => {
    setShowState((showState) => showState = !showState )
 }

  const api = `https://kitsu.io/api/edge/anime?page[offset]=${offset}`;
  useEffect(() => {
    let isMounted = true;
    (async function () {
      try {
        const { data } = await axios.get(api, {
          headers: {
            Accept: "application/vnd.api+json",
            ContentType: "application/vnd.api+json",
          },
          params: {
            ...(search ? { "filter[text]": search } : {}),
            ...(category ? { "filter[categories]": category } : {}),
            ...(ageRating ? { "filter[ageRating]": ageRating } : {}),
            ...(seasonYear ? { "filter[seasonYear]": seasonYear } : {}),
          },
        });
        if (isMounted) setFetchedData(data);
        console.log(data);
      } catch (err) {
        setFetchedData(err);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [ageRating, api, category, search, seasonYear]);

  return (
    <div className="App">
      <Search name='Anime' setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setCategory={setCategory}
            setAgeRating={setAgeRating}
            setSeasonYear={setSeasonYear}
            setPageNumber={setPageNumber}
          />
          <div className="col-8">
            <div className="row">
              <Cards name='Anime' data={data} buttonClicked={buttonClickedHandler}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        dataPerPage={dataPerPage}
        meta={meta}
        offset={offset}
        setOffset={setOffset}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    <Modal show={showState} buttonClicked={buttonClickedHandler} data={data}/>
    </div>
  );
};

export default App;
