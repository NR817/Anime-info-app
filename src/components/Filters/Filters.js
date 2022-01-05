import React from "react";
import Year from "./Category/Year";
import AgeRating from "./Category/AgeRating";
import Categories from "./Category/Categories";

const Filters = ({ setCategory, setSeasonYear, setAgeRating, setPageNumber }) => {

    const clear = () => {
        setCategory('') 
        setSeasonYear('') 
        setAgeRating('') 
        setPageNumber(1)
        window.location.reload(false)
    }

  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
      onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline"
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Categories setCategory={setCategory} setPageNumber={setPageNumber} />
        <AgeRating setAgeRating={setAgeRating} setPageNumber={setPageNumber} />
        <Year setSeasonYear={setSeasonYear} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
