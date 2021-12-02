import { Breadcrumb } from '../../const';
import guitars from '../../mocks/guitars';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filter from '../filter/filter';
import GuitarList from '../guitar-list/guitar-list';
import GuitarPagination from '../guitar-pagination/guitar-pagination';
import Sorting from '../sorting/sorting';
import styles from './catalog-main.module.scss';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb).slice(0, -1);

export default function CatalogMain() {
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
    </main>
  );
}
