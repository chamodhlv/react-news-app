import React from "react";

function Pagination({ currentPage, totalPages, onPrevious, onNext }) {
  const disablePrevious = currentPage === 1;
  const disableNext = currentPage === totalPages;

  return (
    <div className="flex justify-center mt-4">
      <button
        className="btn bg-blue-900 hover:bg-blue-700 text-white font-bold"
        onClick={onPrevious}
        disabled={disablePrevious}
      >
        Previous
      </button>
      <span className="mx-4 mt-1.5">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="btn bg-blue-900 hover:bg-blue-700 text-white font-bold"
        onClick={onNext}
        disabled={disableNext}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
