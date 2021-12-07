import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumb } from '../../const';
import { getAddPopupOpen, getSuccessPopupOpen, selectSortedItems } from '../../store/selectors';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filter from '../filter/filter';
import Filters from '../filters/filters';
import GuitarList from '../guitar-list/guitar-list';
import GuitarPagination from '../guitar-pagination/guitar-pagination';
import Modal from '../modal/modal';
import PopupAdd from '../popups/popup-add/popup-add';
import PopupSuccess from '../popups/popup-success/popup-success';
import Sorting from '../sorting/sorting';
import styles from './catalog-main.module.scss';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb).slice(0, -1);
const GUITARS_PER_PAGE = 9;

export default function CatalogMain() {
  const dispatch = useDispatch();
  const guitars = useSelector(selectSortedItems);
  const paginationPagesCount = Math.ceil(guitars.length / GUITARS_PER_PAGE);
  const isAddPopupOpen = useSelector(getAddPopupOpen);
  const isSuccessPopupOpen = useSelector(getSuccessPopupOpen);

  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Каталог гитар</h1>
      <Breadcrumbs list={CATALOG_BREADCRUMBS} />
      <section className={styles.catalog}>
        {/* <Filter /> */}
        <Filters />
        <div>
          <Sorting />
          <GuitarList list={guitars} />
          {
            paginationPagesCount > 1 &&
              <GuitarPagination totalPages={paginationPagesCount} />
          }
        </div>
      </section>

      <Modal modalState={isAddPopupOpen}>
        <PopupAdd />
      </Modal>

      <Modal modalState={isSuccessPopupOpen}>
        <PopupSuccess />
      </Modal>

    </main>
  );
}
