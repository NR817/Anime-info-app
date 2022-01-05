import React from "react";
import FilterBtn from "../FilterBtn";

const Categories = ({ setCategory, setPageNumber }) => {
  const categories = ["action","adventure", "drama","comedy", "horror", "mystery", "thriller","romance", "fantasy"];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Categories
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body flex-wrap d-flex gap-2">
          {categories.map((item, ind) => (
            <FilterBtn
              key={ind}
              name="categories"
              index={ind}
              item={item}
              setPageNumber={setPageNumber}
              task={setCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
