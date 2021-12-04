import styles from './popup-add.module.scss';
import guitars from '../../../mocks/guitars';
// import {useDispatch, useSelector} from 'react-redux';
// import {getCurrentItem} from '../../../store/selectors';
// import {addCartItem, setPopupOpen} from '../../../store/action';
import Stats from '../stats/stats';
// import {PopupType} from '../../../const';

export default function PopupAdd() {
  // const currentItem = useSelector(getCurrentItem)
  // const dispatch = useDispatch();

  // const _handleAddClick = () => {
  //   dispatch(addCartItem(currentItem));
  //   dispatch(setPopupOpen(PopupType.ADD, false));
  //   dispatch(setPopupOpen(PopupType.SUCCESS, true));
  // }

  const currentItem = guitars[0];
  console.log(currentItem);

  return (
    <section className={styles.popup}>
      <p className={styles.text}>Добавить товар в корзину</p>
      <div className={styles.wrapper}>
        <picture>
          <source type='image/webp' srcSet={`${currentItem.webp} 1x, ${currentItem.webpRetina} 2x`} />
          <img className={styles.picture} src={currentItem.img} srcSet={`${currentItem.imgRetina} 2x`} alt={currentItem.name} />
        </picture>
        <div className={styles.info}>
          <Stats guitar={currentItem} />
        </div>
        <button
          className={styles.btn}
          // onClick={_handleAddClick}
        >
          Добавить в корзину
        </button>
      </div>
    </section>
  );
}
