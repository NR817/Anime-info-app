import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ data, name, handleClickedId }) => {



  const renderedAnime = () => {
    if (data) {
      return data.map((element) => {
        const { id, attributes } = element;

        return (
          <div key={id} className="col-4 mb-3 position-relative">
            <div className="cards">
              <img
                src={attributes.posterImage.large}
                alt={attributes.titles.en}
                className="img-fluid img"
              />
              <div className="content padding">
                <div className="fs-4 fw-bold mb-4">
                  {(() => {
                    if (attributes.titles.en) {
                      if (attributes.titles.en.length > 15)
                        return `${attributes.titles.en.slice(0, 15)}...`;
                      else return attributes.titles.en;
                    } else if (attributes.titles.en_jp) {
                      if (attributes.titles.en_jp.length > 15)
                        return `${attributes.titles.en_jp.slice(0, 15)}...`;
                      else return attributes.titles.en_jp;
                    } else
                      return attributes.titles.en_cn.length > 15
                        ? `${attributes.titles.en_cn.slice(0, 15)}...`
                        : attributes.titles.en_cn;
                  })()}
                </div>
                <div className="">
                  <div className="fs-6">
                    Number of{" "}
                    {attributes.episodeCount ? "Episodes:" : "Volumes:"}
                  </div>
                  <div className="fs-5">
                    {attributes.episodeCount
                      ? attributes.episodeCount > 1
                        ? attributes.episodeCount
                        : 1
                      : attributes.volumeCount > 1
                      ? attributes.volumeCount
                      : 1}
                  </div>
                </div>
                <Link
                  to={`/anime/${id}`}
                  type="button"
                  className="btn btn-primary"
                  id={id}
                  onClick={e => handleClickedId(e.target.id)}
                >
                  Description
                </Link>
              </div>
            </div>
            {(() => {
              if (attributes.ageRating === "R18") {
                return (
                  <div className="position-absolute badge bg-danger">
                    {attributes.ageRating}
                  </div>
                );
              } else if (attributes.ageRating === "R") {
                return (
                  <div className="position-absolute badge bg-warning">
                    {attributes.ageRating}
                  </div>
                );
              } else {
                return (
                  <div className="position-absolute badge bg-success">
                    {attributes.ageRating}
                  </div>
                );
              }
            })()}
          </div>
        );
      });
    } else {
      return `No ${name} Found...`;
    }
  };
  return <>{renderedAnime()}</>;
};

export default Cards;
