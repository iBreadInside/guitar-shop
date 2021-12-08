import styles from './popup-add.module.scss';
import Stats from '../stats/stats';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentItem } from '../../../store/selectors';
import { addCartItem, setPopupOpen } from '../../../store/actions';
import { PopupType } from '../../../const';

export default function PopupAdd() {
  const currentItem = useSelector(getCurrentItem);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addCartItem(currentItem));
    dispatch(setPopupOpen(PopupType.ADD, false));
    dispatch(setPopupOpen(PopupType.SUCCESS, true));
  };

  return (
    <section className={styles.popup}>
      <p className={styles.text}>Добавить товар в корзину</p>
      <div className={styles.wrapper}>
        <picture>
          <source type='image/webp' srcSet={`${currentItem.webp} 1x, ${currentItem.webpRetina} 2x`} />
          <img className={styles.picture} src={currentItem.img} srcSet={`${currentItem.imgRetina} 2x`} alt={currentItem.name} />
        </picture>
        <Stats guitar={currentItem} />
        <button
          className={styles.btn}
          onClick={handleAddClick}
        >
          Добавить в корзину
        </button>
      </div>
    </section>
  );
}
