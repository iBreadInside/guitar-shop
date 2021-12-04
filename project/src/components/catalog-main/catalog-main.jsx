import { useState } from 'react';
import { Breadcrumb } from '../../const';
import guitars from '../../mocks/guitars';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filter from '../filter/filter';
import GuitarList from '../guitar-list/guitar-list';
import GuitarPagination from '../guitar-pagination/guitar-pagination';
import Modal from '../modal/modal';
import PopupAdd from '../popups/popup-add/popup-add';
import PopupSuccess from '../popups/popup-success/popup-success';
import Sorting from '../sorting/sorting';
import styles from './catalog-main.module.scss';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb).slice(0, -1);

export default function CatalogMain() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);

  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Каталог гитар</h1>
      <Breadcrumbs list={CATALOG_BREADCRUMBS} />
      <section className={styles.catalog}>
        <Filter />
        <div>
          <Sorting />
          <GuitarList list={guitars} />
          <GuitarPagination totalPages={7} />
        </div>
      </section>

      <Modal modalState={isModalShown}>
        <PopupAdd />
      </Modal>

      <Modal modalState={isModalSuccess}>
        <PopupSuccess />
      </Modal>

    </main>
  );
}
