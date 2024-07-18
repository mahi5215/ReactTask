import React from 'react';
import './Pagination.css'; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  let startPage = Math.max(1, currentPage - 4);
  let endPage = Math.min(totalPages, currentPage + 5);
  

  if (currentPage <= 5) {
    endPage = Math.min(totalPages, 10);
  } else if (currentPage >= totalPages - 4) {
    startPage = Math.max(1, totalPages - 9);
  }

  const pages = [...Array(endPage - startPage + 1).keys()].map(num => startPage + num);

  return (
    <div className="pagination">
      <button
        className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pages.map(page => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
