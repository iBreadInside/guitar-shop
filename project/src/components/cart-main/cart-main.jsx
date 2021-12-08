import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, MAX_SALE, PopupType, PromoCode, PromoCodesMap } from '../../const';
import { addCartItem, deleteCartItem, setCurrentItem, setPopupOpen } from '../../store/actions';
import { getCartItems } from '../../store/cart/selectors';
import { getDeletePopupOpen } from '../../store/modals/selectors';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Modal from '../modal/modal';
import PopupDelete from '../popups/popup-delete/popup-delete';
import styles from './cart-main.module.scss';

const CATALOG_BREADCRUMBS = Object.entries(Breadcrumb);
const NO_PROMOCODE = `NO_PROMOCODE`;
const MAX_PROMOCODE_LENGTH = 12;

export default function CartMain() {
  const dispatch = useDispatch();
  const items = useSelector(getCartItems);
  const isDeletePopupOpen = useSelector(getDeletePopupOpen);

  const [promoCode, setPromoCode] = useState(null);
  const [isCodeValid, setIsCodeValid] = useState(NO_PROMOCODE);

  const getTotalSum = () => {
    return items.reduce((a, b) => (a + b.price * b.amount), 0)
  };

  const [totalSum, setTotalSum] = useState(getTotalSum());

  const getItemSum = (item) => {
    return item.amount * item.price;
  };

  const getWithSale = (sum) => {
    switch (promoCode) {
      case PromoCode.GITARAHIT:
        return sum - sum * PromoCodesMap[PromoCode.GITARAHIT];
      case PromoCode.SUPERGITARA:
        return sum - PromoCodesMap[PromoCode.SUPERGITARA];
      case PromoCode.GITARA2020:
        return MAX_SALE * sum >= PromoCodesMap[PromoCode.GITARA2020]
          ? sum - PromoCodesMap[PromoCode.GITARA2020]
          : sum - MAX_SALE * sum;
      default:
        return sum;
    }
  };

  const handleModalAfterOpen = () => {
    document.body.classList.add(styles.open);
  };

  const handleModalAfterClose = (type) => {
    document.body.classList.remove(styles.open);
    dispatch(setPopupOpen(type, false));
  };

  const handleDeleteClick = (item) => {
    dispatch(setCurrentItem(item));
    dispatch(setPopupOpen(PopupType.DELETE, true));
  };

  const handleAmountDecrease = (item) => {
    if (item.amount > 1) {
      dispatch(deleteCartItem(item))
    } else {
      dispatch(setPopupOpen(PopupType.DELETE, true));
      dispatch(setCurrentItem(item));
    }
  };

  const handleAmountIncrease = (item) => {
    dispatch(addCartItem(item));
  };

  const handlePromoChange = (evt) => {
    setPromoCode(evt.target.value);
  };

  const handlePromoClick = () => {
    Object.values(PromoCode).includes(promoCode)
      ? setIsCodeValid(true)
      : setIsCodeValid(false);
  };

  const handlePromoKeyDown = (evt) => {
    if (evt.code === 'Enter') {
      handlePromoClick();
    };
  };

  const handlePromoFocus = () => {
    setIsCodeValid(NO_PROMOCODE);
  };

  useEffect(() => {
    const sum = getTotalSum();
    if (isCodeValid) {
      setTotalSum(getWithSale(sum));
    } else {
      setTotalSum(sum);
      setIsCodeValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCodeValid, items]);

  return(
    <main className={styles.main}>
      <h1 className={styles.title}>Корзина</h1>
      <Breadcrumbs list={CATALOG_BREADCRUMBS} />
      <ul className={styles.list}>
        {
          items.map(guitar => (
            <li key={guitar.id} className={styles.card}>
              <button
                className={styles.delete}
                type='button'
                onClick={() => handleDeleteClick(guitar)}
                aria-label='Удалить товар из корзины'
              >
                <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M13.77 14.835L9.00004 10.0575L4.23004 14.835L3.16504 13.77L7.94254 9.00004L3.16504 4.23004L4.23004 3.16504L9.00004 7.94254L13.77 3.17254L14.8275 4.23004L10.0575 9.00004L14.8275 13.77L13.77 14.835Z' fill='#9F9E9E'/>
                </svg>
              </button>

              <picture>
                <source type='image/webp' srcSet={`${guitar.webp} 1x, ${guitar.webpRetina} 2x`} />
                <img width='48' height='124' src={guitar.img} srcSet={`${guitar.imgRetina} 2x`} alt={guitar.name} />
              </picture>

              <section className={styles.info}>
                  <p className={styles.name}>{guitar.type.toUpperCase()} {guitar.name.toUpperCase()}</p>
                  <p className={styles.code}>Артикул: {guitar.vendorCode}</p>
                  <p className={styles.details}>{guitar.type}, {guitar.strings} струнная</p>
              </section>

              <p className={styles.price}>{guitar.price.toLocaleString(`fr`)} ₽</p>

              <div className={styles.amount__block}>
                <button
                  className={`${styles.button} ${styles.button_remove}`}
                  onClick={() => handleAmountDecrease(guitar)}
                  aria-label='Убрать одну'
                >
                  <svg width='8' height='1' viewBox='0 0 8 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <line x1='8' y1='0.5' y2='0.5' stroke='#9F9E9E'/>
                  </svg>
                </button>
                <label
                  htmlFor='amount'
                  className='visually-hidden'
                >
                  количества товара
                </label>
                <input
                  id='amount'
                  type='number'
                  className={styles.amount}
                  value={guitar.amount}
                  disabled/>
                <button
                  className={`${styles.button} ${styles.button_add}`}
                  onClick={() => handleAmountIncrease(guitar)}
                  aria-label='Добавить одну'
                >
                  <svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <line x1='8' y1='4.11816' y2='4.11816' stroke='#9F9E9E'/>
                    <line x1='3.8457' y1='8' x2='3.8457' stroke='#9F9E9E'/>
                  </svg>
                </button>
              </div>
              <p className={`${styles.price} ${styles.price_total}`}>{`${getItemSum(guitar)} ₽`}</p>
            </li>
          ))
        }
        {
          !items.length && <p>Корзина пуста</p>
        }
      </ul>

      {
        items.length !== 0 && (
          <div className={styles.order}>
            <div className={styles.promo__block}>
              <p className={styles.text}>Промокод на скидку</p>
              <p className={styles.hint}>Введите свой промокод, если он у вас есть.</p>
              <div className={styles.field}>
                <input
                  id='promo'
                  type='text'
                  className={`${styles.promo} ${!isCodeValid ? styles.promo_invalid : ''}`}
                  maxLength={MAX_PROMOCODE_LENGTH}
                  onChange={handlePromoChange}
                  onFocus={handlePromoFocus}
                  onKeyDown={handlePromoKeyDown}
                  autoComplete='off'
                />
                <label className='visually-hidden' htmlFor='promo'>Промокод</label>
                {!isCodeValid && <span className={styles.promo_invalid_text}>Промокод не действителен</span>}
                <button
                  className={`${styles.btn} ${styles.btn_promo}`}
                  onClick={handlePromoClick}
                >
                  Применить купон
                </button>
              </div>
            </div>
            <div className={styles.sum}>
              <span className={styles.total}>Всего: {totalSum} ₽</span>
              <Link to='#' className={`${styles.btn} ${styles.btn_order}`}>
                Оформить заказ
              </Link>
            </div>
          </div>
        )
      }
      <Modal
        modalState={isDeletePopupOpen}
        onAfterOpen={handleModalAfterOpen}
        onRequestClose={() => handleModalAfterClose(PopupType.DELETE)}
      >
        <PopupDelete />
      </Modal>
    </main>
  );
}
