import Link from "next/link";
import React from "react";
import { PER_PAGE_LIMIT } from "../config/index";

export default function Pagination({ page, total }) {
    const lastPage = Math.ceil(total/PER_PAGE_LIMIT);
  return (
    <>
      {/** Pagination */}
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a className="btn-secondary">Prev</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a className="btn-secondary">Next</a>
        </Link>
      )}
    </>
  );
}
