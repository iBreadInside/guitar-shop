import { Breadcrumb } from '../../const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import styles from './catalog-main.module.scss';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb);

export default function CatalogMain() {
  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Каталог гитар</h1>
      <Breadcrumbs list={CATALOG_BREADCRUMBS} />
    </main>
  );
}
