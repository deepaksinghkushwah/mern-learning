import { Link } from "react-router-dom";
import React from "react";
import { PER_PAGE_LIMIT } from "../config/index.js"
const Pagination = ({ pagination }) => {
  //console.log(pagination)
  return (
    <div className="text-center card p-3">
      <div className="d-flex justify-content-center gap-3 card-body">
        

        {pagination?.prevPage ? (
          <div className="">
            <Link className="btn btn-secondary btn-sm" to={`/property/listings?page=${pagination.prevPage}`}>Prev</Link>
          </div>
        ) : ''}

        
        {pagination?.totalRows ? <div>Total Page: {pagination.totalPages}, Total Rows: {pagination.totalRows}, Current Page: {pagination.currentPage}</div> : 'No result found'}
          
          

        {pagination?.nextPage ? (
          <div className="">
            <Link className="btn btn-secondary btn-sm" to={`/property/listings?page=${pagination.nextPage}`}>Next</Link>
          </div>
        ) : ''}
      </div>
    </div>
  );
}


export default Pagination;