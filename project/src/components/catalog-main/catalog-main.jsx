import { Breadcrumb } from '../../const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Filter from '../filter/filter';
import styles from './catalog-main.module.scss';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb).slice(0, -1);

export default function CatalogMain() {
  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Каталог гитар</h1>
      <Breadcrumbs list={CATALOG_BREADCRUMBS} />
      <section className={styles.catalog}>
        <Filter />
      </section>
    </main>
  );
}
