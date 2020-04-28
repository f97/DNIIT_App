/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Intent } from '@blueprintjs/core';
import PropTypes from 'prop-types';

const Pagination = ({ page, totalPages, onChangePage }) => {
  if (totalPages === 1) return null;

  const [arrayPages, setArrayPages] = useState([]);

  useEffect(() => {
    if (totalPages < 5) {
      setArrayPages(Array.from(Array(totalPages).keys()).map((i) => i + 1));
    } else if (page === 1 || page === 2) {
      setArrayPages([1, 2, 3, 4, 5]);
    } else if (page === totalPages || page === totalPages - 1) {
      setArrayPages([
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ]);
    } else {
      setArrayPages([page - 2, page - 1, page, page + 1, page + 2]);
    }
  }, [page]);

  return (
    <ButtonGroup className="pagination">
      <Button
        intent={Intent.PRIMARY}
        disabled={page === 1}
        onClick={() => {
          onChangePage(1);
        }}
      >
        First
      </Button>
      {arrayPages.map((p) => (
        <Button
          key={p}
          intent={p === page ? Intent.NONE : Intent.PRIMARY}
          disabled={p === page}
          onClick={() => {
            onChangePage(p);
          }}
        >
          {p}
        </Button>
      ))}
      <Button
        disabled={page === totalPages}
        intent={Intent.PRIMARY}
        onClick={() => {
          onChangePage(totalPages);
        }}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  page: 1,
  totalPages: 25,
};

export default Pagination;
