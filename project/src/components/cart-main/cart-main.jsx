import { useState } from 'react';
import { Breadcrumb } from '../../const';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CartList from '../cart-list/cart-list';
import Modal from '../modal/modal';
import PopupDelete from '../popups/popup-delete/popup-delete';
import styles from './cart-main.module.scss';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb);

export default function CartMain() {
  const [isModalShown, setIsModalShown] = useState(false);
  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Корзина</h1>
      <Breadcrumbs list={CATALOG_BREADCRUMBS} />
      <CartList />

      <Modal modalState={isModalShown}>
        <PopupDelete />
      </Modal>
    </main>
  );
}
