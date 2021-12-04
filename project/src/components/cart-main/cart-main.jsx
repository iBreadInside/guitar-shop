import { Breadcrumb } from '../../const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CartList from '../cart-list/cart-list';
import styles from './cart-main.module.scss';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb);

export default function CartMain() {
  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Корзина</h1>
      <Breadcrumbs list={CATALOG_BREADCRUMBS} />
      <CartList />
    </main>
  );
}
