import React from "react";
import "./Cards.css";

const Cards = ({ data, buttonClicked , name}) => {
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
                  {attributes.titles.en_jp
                    ? attributes.titles.en_jp.length > 15
                      ? `${attributes.titles.en_jp.slice(0, 15)}...`
                      : attributes.titles.en_jp
                    : attributes.titles.en_cn.length > 15
                    ? `${attributes.titles.en_cn.slice(0, 15)}...`
                    : attributes.titles.en_cn}
                </div>
                <div className="">
                  <div className="fs-6">Number of {attributes.episodeCount ? 'Episodes:' : 'Volumes:'}</div>
                  <div className="fs-5">
                    {attributes.episodeCount
                      ? attributes.episodeCount > 1
                        ? attributes.episodeCount
                        : 1
                      : attributes.volumeCount > 1 ? 
                      attributes.volumeCount :
                      1
                    }
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  id="shoutBtn"
                  onClick={buttonClicked}
                >
                  Description
                </button>
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
