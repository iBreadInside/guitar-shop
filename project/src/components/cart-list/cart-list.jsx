import { Link } from 'react-router-dom';
import guitars from '../../mocks/guitars';
import CartCard from '../cart-card/cart-card';
import styles from './cart-list.module.scss';

const cartList = guitars.slice(0, 2);

export default function CartList() {
  return(
    <>
      <ul className={styles.list}>
        {
          cartList.map(guitar => (
            <CartCard key={guitar.id} item={guitar} />
          ))
        }
        {/* {!items.length && <div className='cart__empty'>Корзина пуста</div>} */}
      </ul>

      {/* {items.length !== 0 && ( */}
        <div className={styles.order}>
          <div className={styles.promo__block}>
            <p className={styles.text}>Промокод на скидку</p>
            <p className={styles.hint}>Введите свой промокод, если он у вас есть.</p>
            <div className={styles.field}>
              <input
                id='promo'
                type='text'
                className={styles.promo}
                maxLength={10}
                // className={_getPromoClassName()}
                // onChange={_handlePromoChange}
                // onFocus={_handlePromoFocus}
                autoComplete='off'
              />
              <label className='visually-hidden' htmlFor='promo'>Промокод</label>
              {/* {!isCodeValid && <span className='cart__invalid-text'>Промокод не действителен</span>} */}
              <button
                className={`${styles.btn} ${styles.btn_promo}`}
                // onClick={_handlePromoClick}
              >
                Применить купон
              </button>
            </div>
          </div>
          <div className={styles.sum}>
            <span className={styles.total}>Всего: {(54000).toLocaleString(`fr`)} ₽</span>
            <Link to='#' className={`${styles.btn} ${styles.btn_order}`}>
              Оформить заказ
            </Link>
          </div>
        </div>
      {/* )} */}
    </>
  );
}