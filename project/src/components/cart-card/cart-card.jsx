import styles from './cart-card.module.scss';
import acousticPng from '../../img/guitars/acoustic.png';
import acousticPngRetina from '../../img/guitars/acoustic@2x.png';
import acousticWebp from '../../img/guitars/acoustic.webp';
import acousticWebpRetina from '../../img/guitars/acoustic@2x.webp';
import { useState } from 'react';

export default function CartCard({item}) {
  const {
    name,
    type,
    vendorCode,
    strings,
    price,
  } = item;

  const [amount, setAmount] = useState(1);

  const handleAmountIncrease = () => {
    setAmount(amount + 1);
  };

  const handleAmountDecrease = () => {
    setAmount(amount - 1);
  };

  return(
    <li className={styles.card}>
      <button
        className={styles.delete}
        type='button'
        aria-label='Удалить товар из корзины'
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.77 14.835L9.00004 10.0575L4.23004 14.835L3.16504 13.77L7.94254 9.00004L3.16504 4.23004L4.23004 3.16504L9.00004 7.94254L13.77 3.17254L14.8275 4.23004L10.0575 9.00004L14.8275 13.77L13.77 14.835Z" fill="#9F9E9E"/>
        </svg>
      </button>

      <picture>
        <source type='image/webp' srcSet={`${acousticWebp} 1x, ${acousticWebpRetina} 2x`} />
        <img width='48' height='124' src={acousticPng} srcSet={`${acousticPngRetina} 2x`} alt={name} />
      </picture>

      <section className={styles.info}>
          <p className={styles.name}>{type.toUpperCase()} {name.toUpperCase()}</p>
          <p className={styles.code}>Артикул: {vendorCode}</p>
          <p className={styles.details}>{type}, {strings} струнная</p>
      </section>

      <p className={styles.price}>{price.toLocaleString(`fr`)} ₽</p>

      <div className={styles.amount__block}>
        <button
          className={`${styles.btn} ${styles.btn_remove}`}
          onClick={handleAmountDecrease}
          aria-label='Убрать одну'
          disabled={amount === 0}
        >
          -
        </button>
        <label
          htmlFor="amount"
          className={`visually-hidden`}
        >
          количества товара
        </label>
        <input
          id='amount'
          type='number'
          className={styles.amount}
          value={amount}
          disabled/>
        <button
          className={`${styles.btn} ${styles.btn_add}`}
          onClick={handleAmountIncrease}
          aria-label='Добавить одну'
        >
          +
        </button>
      </div>
      <p className={`${styles.price} ${styles.sum}`}>{`${(amount * price).toLocaleString(`fr`)} ₽`}</p>

    </li>
  );
}
