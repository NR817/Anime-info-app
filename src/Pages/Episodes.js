import axios from "axios";
import React, { useState, useEffect } from "react";

import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);

  const { name, air_date } = fetchedData;

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(api);
        setFetchedData(data);

        let getAllCharacters = [];
         await Promise.all(
          data.characters.map(async (el) => {
           const {data} = await axios.get(el);
           getAllCharacters.push(data);
          }) 
        );  
        setData(getAllCharacters)         
      } catch (err) {
        setFetchedData(err);
      }
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-3">
          Episode name:{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup setId={setId} name='Episode' total={51} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
