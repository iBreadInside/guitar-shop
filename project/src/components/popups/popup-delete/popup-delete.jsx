import styles from './popup-delete.module.scss';
// import {useDispatch, useSelector} from 'react-redux';
import Stats from '../stats/stats';
import guitars from '../../../mocks/guitars';
// import {getCurrentItem} from '../../../store/selectors';
// import {deleteCartItem, setPopupOpen} from '../../../store/action';
// import {PopupType} from '../../../const';

export default function PopupDelete() {
  // const currentItem = useSelector(getCurrentItem)
  // const dispatch = useDispatch();

  // const _handleDeleteClick = (item) => {
  //   dispatch(deleteCartItem(item, true));
  //   dispatch(setPopupOpen(PopupType.DELETE, false));
  // }

  // const _handleCloseClick = () => {
  //   dispatch(setPopupOpen(PopupType.DELETE, false));
  // }

  const currentItem = guitars[0];

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
            // onClick={ () => _handleDeleteClick(currentItem)}
          >
            Удалить товар
          </button>
          <button
            className={`${styles.btn} ${styles.btn_continue}`}
            // onClick={_handleCloseClick}
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </section>
  );
}
