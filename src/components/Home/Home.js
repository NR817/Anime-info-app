import React, { useState, useEffect } from "react";
import axios from "axios";

import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

const Home = ({handleData, handleClickedId}) => {
    const [dataPerPage] = useState(9);
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [offset, setOffset] = useState(0);
    const [category, setCategory] = useState("");
    const [ageRating, setAgeRating] = useState("");
    const [seasonYear, setSeasonYear] = useState(null);
    const [fetchedData, setFetchedData] = useState([]);
  
    const { meta, data } = fetchedData;
  
  
    const api = `https://kitsu.io/api/edge/anime?page[offset]=${offset}&page[limit]=${dataPerPage}`;
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
        } catch (err) {
          setFetchedData(err);
        }
      })();
      return () => {
        isMounted = false;
      };
    }, [ageRating, api, category, search, seasonYear]);
    
    handleData(data)

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
                <Cards handleClickedId={handleClickedId} name='Anime' data={data} />
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
      </div>
  
    );
  };

  export default Home;