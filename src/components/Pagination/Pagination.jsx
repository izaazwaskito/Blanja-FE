import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            style={{
              width: 40,
              border: "transparent",
              backgroundColor: "transparent",
            }}
            onClick={() => setCurrentPage(page)}
            className={`${
              page === currentPage ? "active" : ""
            } mt-3 me-2 ps-3 pe-3`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;