import React from "react";
import ReactPaginate from "react-paginate";
import './Pagination.css'

const Pagination = ({ dataPerPage, setOffset, meta, setPageNumber, pageNumber }) => {

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      previousLabel="Prev"
      previousClassName="btn btn-primary"
      nextClassName="btn btn-primary"
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      forcePage={pageNumber === 0 ? 0 : pageNumber-1}
      onPageChange={(e)=>{
        const selectedPage = e.selected+1
        setPageNumber(e.selected+1)
        setOffset(selectedPage*dataPerPage); 
      }}
      pageCount={Math.floor(meta?.count / dataPerPage)}
    />
  );
};

export default Pagination;
