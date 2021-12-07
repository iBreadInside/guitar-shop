import styles from './guitar-pagination.module.scss';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setPagination } from '../../store/actions';
// import { getPaginationPage } from '../../store/guitars/selectors';

export default function GuitarPagination({totalPages}) {
  // const dispatch = useDispatch();
  // const currentPage = useSelector(getPaginationPage);

  // useEffect(() => {
  //   dispatch(setPagination(0));
  // }, [totalPages, dispatch]);

  const handlePageChange = (event) => {
    // dispatch(setPagination(event.selected));
    setCurrentPage(event.selected);
  };

  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    setCurrentPage(0);
  }, [totalPages]);

  return(
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={currentPage === totalPages - 1 ? 2 : 1}
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
      renderOnZeroPageCount={null}
      onPageChange={handlePageChange}
    />
  );
}

GuitarPagination.propTypes = {
  totalPages: PropTypes.number,
};
