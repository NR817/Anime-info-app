import React from "react";
import FilterBtn from "../FilterBtn";

const AgeRating = ({ setAgeRating, setPageNumber }) => {

  const ageRating = ['G','PG','R','R18']

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Age Rates
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {ageRating.map((item, ind) => (
            <FilterBtn
              key={ind}
              name="ageRating"
              index={ind}
              item={item}
              setPageNumber={setPageNumber}
              task={setAgeRating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgeRating;
