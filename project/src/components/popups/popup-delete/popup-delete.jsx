import styles from './popup-delete.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Stats from '../stats/stats';
import { deleteCartItem, setPopupOpen } from '../../../store/actions';
import { PopupType } from '../../../const';
import { getCurrentItem } from '../../../store/cart/selectors';

export default function PopupDelete() {
  const currentItem = useSelector(getCurrentItem);
  const dispatch = useDispatch();

  const handleDeleteClick = (item) => {
    dispatch(deleteCartItem(item, true));
    dispatch(setPopupOpen(PopupType.DELETE, false));
  };

  const handleCloseClick = () => {
    dispatch(setPopupOpen(PopupType.DELETE, false));
  };

  return (
    <section className={styles.popup}>
      <p className={styles.text}>Удалить этот товар?</p>
      <div className={styles.wrapper}>
        <picture>
          <source type='image/webp' srcSet={`${currentItem.webp} 1x, ${currentItem.webpRetina} 2x`} />
          <img className={styles.picture} src={currentItem.img} srcSet={`${currentItem.imgRetina} 2x`} alt={currentItem.name} />
        </picture>
        <div className={styles.info}>
          <Stats guitar={currentItem} />
        </div>
        <div className={styles.control}>
          <button
            className={`${styles.btn} ${styles.btn_delete}`}
            onClick={ () => handleDeleteClick(currentItem)}
          >
            Удалить товар
          </button>
          <button
            className={`${styles.btn} ${styles.btn_continue}`}
            onClick={handleCloseClick}
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </section>
  );
}
