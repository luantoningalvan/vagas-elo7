"use client";

import styles from "./Pagination.module.css";

interface PaginationProps {
  total: number;
  page: number;
  perPage: number;
  onChange: (page: number) => void;
}

export function Pagination(props: PaginationProps) {
  const { total, page, perPage, onChange } = props;

  const totalPages = Math.ceil(total / perPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav>
      <ul className={styles.pagination} data-testid="pages-list">
        {pages.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`${styles.pageItem} ${
              pageNumber === page ? styles.activePageItem : ""
            }`}
          >
            <button onClick={() => onChange(pageNumber)}>{pageNumber}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
