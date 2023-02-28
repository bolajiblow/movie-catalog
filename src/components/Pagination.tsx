import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onChangePage }:{items: any, pageSize :any, currentPage: any, onChangePage: any }) => {
  const pageCount = items / pageSize;
  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example ">
      <ul className="flex items-center">
        {pages.map((page : any)  => (
          <li
            key={page}
            className={page === currentPage ? "bg-primary" : "page-item"}
          >
            <a
              style={{ cursor: "pointer" }}
              onClick={() => onChangePage(page)}
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
