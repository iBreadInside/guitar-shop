import styles from './guitar-pagination.module.scss';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

export default function GuitarPagination({totalPages}) {
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    totalPages !== 0 &&
      setCurrentPage(0);
  }, [totalPages]);

  return(
    totalPages !== undefined &&
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        previousLabel='Назад'
        breakLabel='...'
        nextLabel='Далее'
        forcePage={currentPage}
        containerClassName={styles.container}
        breakClassName={styles.break}
        breakLinkClassName='visually-hidden'
        pageClassName={styles.item}
        pageLinkClassName={styles.page__link}
        activeLinkClassName={styles.page__link_active}
        previousLinkClassName={`${styles.page__link} ${styles.page__link_prev}`}
        nextLinkClassName={`${styles.page__link} ${styles.page__link_next}`}
        disabledClassName={'visually-hidden'}
        renderOnZeroPageCount={''}
      />
  );
}

GuitarPagination.propTypes = {
  totalPages: PropTypes.number,
};
