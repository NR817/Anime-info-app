import axios from "axios";
import React, { useState, useEffect } from "react";


import Cards from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination"
import Search from "../components/Search/Search"
import Modal from "../components/Modal/Modal"

const Manga = () => {
  const [dataPerPage] = useState(9);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [fetchedData, setFetchedData] = useState([]);
  const [showState, setShowState] = useState(false)

  const { meta, data } = fetchedData;

  const buttonClickedHandler = () => {
    setShowState((showState) => showState = !showState )
 }

  const api = `https://kitsu.io/api/edge/manga?page[offset]=${offset}&page[limit]=${dataPerPage}`;
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
            ...(search ? { "filter[text]": search } : {})
          }
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
  }, [api, search]);


  return (
    <div className="container">
            <Search name='Manga' setPageNumber={setPageNumber} setSearch={setSearch} />
      {/* <div className="row mb-4">
        <h1 className="text-center mb-3">
          Episode name:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div> */}
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">All Time Favorites</h4>
          {/* <InputGroup setId={setId} name='Episode' total={51} /> */}
        </div>
        <div className="col-8">
          <div className="row">
            <Cards name='Manga' data={data} buttonClicked={buttonClickedHandler} />
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

export default Manga;
