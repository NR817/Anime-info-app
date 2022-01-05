import React from "react";

const FilterBtn = ({name, index, item, task, setPageNumber}) => {
  return (
    <>
    <style jsx='true'>
        {`
        .form-check-input:checked + label {
            background-color: #0b5ed7;
            color: white
        }
        input[type='radio'] {
            display: none;
        }
        `}
    </style>
      <div className="form-check">
        <input
        onClick={() => {
            setPageNumber(1)
            task(item)
        }}
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
<label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>{item}</label>
      </div>
    </>
  );
};

export default FilterBtn;
