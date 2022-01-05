import React from "react";
import FilterBtn from "../FilterBtn";

const Year = ({ setSeasonYear, setPageNumber }) => {
  const year = [1990, 1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Year Aired
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-2">
          {year.map((item, ind) => (
            <FilterBtn
              key={ind}
              name="gender"
              index={ind}
              item={item}
              setPageNumber={setPageNumber}
              task={setSeasonYear}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Year;
