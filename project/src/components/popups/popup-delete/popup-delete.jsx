import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Stats from '../stats/stats';
import {getCurrentItem} from '../../../store/selectors';
import {deleteCartItem, setPopupOpen} from '../../../store/action';
import {PopupType} from '../../../const';


export default function PopupDelete() {
  const currentItem = useSelector(getCurrentItem)
  const dispatch = useDispatch();

  const _handleDeleteClick = (item) => {
    dispatch(deleteCartItem(item, true));
    dispatch(setPopupOpen(PopupType.DELETE, false));
  }

  const _handleCloseClick = () => {
    dispatch(setPopupOpen(PopupType.DELETE, false));
  }

  return (
    <section className='popup-delete'>
      <p className='popup-delete__text'>Удалить этот товар? </p>
      <div className='popup-delete__wrapper'>
        <img className='popup-delete__img' width='48' height='84' src={currentItem.img} alt={currentItem.name}/>
        <div className='popup-delete__info'>
          <Stats
            guitar={currentItem}
          />
        </div>
        <button
          className='button button--primary popup-delete__button'
          onClick={ () => _handleDeleteClick(currentItem)}
          aria-label='Remove item'
        >
          Удалить товар
        </button>
      <button
        className='popup-delete__close'
        onClick={_handleCloseClick}
        aria-label='Continue'
      >
        Продолжить покупки
      </button>
      </div>
    </section>
  );
}
