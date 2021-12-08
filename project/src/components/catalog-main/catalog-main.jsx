import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb, PopupType } from '../../const';
import ReactPaginate from 'react-paginate';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filters from '../filters/filters';
import GuitarList from '../guitar-list/guitar-list';
import Modal from '../modal/modal';
import PopupAdd from '../popups/popup-add/popup-add';
import PopupSuccess from '../popups/popup-success/popup-success';
import Sorting from '../sorting/sorting';
import styles from './catalog-main.module.scss';
import { setPopupOpen } from '../../store/actions';
import { selectSortedItems } from '../../store/catalog/selectors';
import { getAddPopupOpen, getSuccessPopupOpen } from '../../store/modals/selectors';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb).slice(0, -1);
const GUITARS_PER_PAGE = 9;

export default function CatalogMain() {
  const dispatch = useDispatch();
  const guitars = useSelector(selectSortedItems);
  const paginationPagesCount = Math.ceil(guitars.length / GUITARS_PER_PAGE);
  const isAddPopupOpen = useSelector(getAddPopupOpen);
  const isSuccessPopupOpen = useSelector(getSuccessPopupOpen);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [pageSelected, setPageSelected] = useState(0);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * GUITARS_PER_PAGE) % guitars.length;
    setItemOffset(newOffset);
    setPageSelected(event.selected);
  };

  const handleModalAfterOpen = () => {
    document.body.classList.add(styles.open);
  };

  const handleModalAfterClose = (type) => {
    document.body.classList.remove(styles.open);
    dispatch(setPopupOpen(type, false));
  };

  useEffect(() => {
    setItemOffset(0);
    const endOffset = itemOffset + GUITARS_PER_PAGE;
    setCurrentItems(guitars.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(guitars.length / GUITARS_PER_PAGE));
    setPageSelected(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guitars]);

  useEffect(() => {
    const endOffset = itemOffset + GUITARS_PER_PAGE;
    setCurrentItems(guitars.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(guitars.length / GUITARS_PER_PAGE));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[itemOffset, GUITARS_PER_PAGE]);

  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Каталог гитар</h1>
      <Breadcrumbs list={CATALOG_BREADCRUMBS} />
      <section className={styles.catalog}>
        <Filters />
        <div>
          <Sorting />
          <GuitarList list={currentItems} />
          {
            paginationPagesCount > 1 &&
              <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={pageSelected === pageCount - 1 ? 2 : 1}
                marginPagesDisplayed={1}
                previousLabel='Назад'
                breakLabel='...'
                nextLabel='Далее'
                forcePage={pageSelected}
                containerClassName={styles.container}
                breakClassName={styles.break}
                breakLinkClassName='visually-hidden'
                pageClassName={styles.item}
                pageLinkClassName={styles.page__link}
                activeLinkClassName={styles.page__link_active}
                previousLinkClassName={`${styles.page__link} ${styles.page__link_prev}`}
                nextLinkClassName={`${styles.page__link} ${styles.page__link_next}`}
                disabledClassName='visually-hidden'
                renderOnZeroPageCount={null}
                onPageChange={handlePageClick}
              />
          }
        </div>
      </section>

      <Modal
        modalState={isAddPopupOpen}
        onAfterOpen={handleModalAfterOpen}
        onRequestClose={() => handleModalAfterClose(PopupType.ADD)}
      >
        <PopupAdd />
      </Modal>

      <Modal
        modalState={isSuccessPopupOpen}
        onAfterOpen={handleModalAfterOpen}
        onRequestClose={() => handleModalAfterClose(PopupType.SUCCESS)}
      >
        <PopupSuccess />
      </Modal>

    </main>
  );
}
