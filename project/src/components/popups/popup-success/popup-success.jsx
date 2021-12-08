import styles from './popup-success.module.scss';
import { NavLink } from 'react-router-dom';
import { AppRoute, PopupType } from '../../../const';
import { useDispatch } from 'react-redux';
import { setPopupOpen } from '../../../store/actions';

export default function PopupSuccess() {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(setPopupOpen(PopupType.SUCCESS, false));
  };

  return (
    <section className={styles.popup}>
      <p className={styles.text}>Товар успешно добавлен в корзину</p>
      <div className={styles.buttons}>
        <NavLink
          className={styles.btn}
          to={AppRoute.CART}
          onClick={handleCloseClick}
        >
            Перейти в корзину
        </NavLink>
        <button
          className={styles.close}
          onClick={handleCloseClick}
        >
          Продолжить покупки
        </button>
      </div>
    </section>
  );
}
