import React from "react";
import { Link } from "react-router-dom";

import "./AnimeDetails.css";

const AnimeDetails = ({ data, clickedId }) => {
    console.log(data[clickedId-1]
        );
  return (
    <div className="card" id={clickedId}>
      <div className="card__content">
        <div>
          <h2>
            {data[clickedId - 1].attributes.titles.en_jp
              ? data[clickedId - 1].attributes.titles.en_jp
              : data[clickedId - 1].attributes.titles.en_cn}
          </h2>
          <p>{data[clickedId - 1].attributes.description}</p>
          <p>
            <Link to="/" className="btn1 btn--accent">
              Go Back
            </Link>
          </p>
        </div>
        <figure>
          <img
            src={data[clickedId - 1].attributes.posterImage.large}
            alt={data[clickedId - 1].attributes.titles.en}
          />
        </figure>
      </div>
    </div>
  );
};

export default AnimeDetails;
