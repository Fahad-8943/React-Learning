import BootstrapPagination from "react-bootstrap/Pagination";

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <BootstrapPagination className="justify-content-center mt-4 mb-0">
      <BootstrapPagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      {Array.from({ length: totalPages }, (_, index) => (
        <BootstrapPagination.Item
          key={index + 1}
          active={currentPage === index + 1}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </BootstrapPagination.Item>
      ))}

      <BootstrapPagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </BootstrapPagination>
  );
}

export default Pagination;
