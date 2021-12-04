import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setPopupOpen} from '../../../store/action';
import {AppRoute, PopupType} from '../../../const';

export default function PopupSuccess() {

  const dispatch = useDispatch();

  const _handleCloseClick = () => {
    dispatch(setPopupOpen(PopupType.SUCCESS, false));
  };

  return (
    <section className='popup-success'>
      <p className='popup-success__text'>Товар успешно добавлен в корзину</p>
      <NavLink className='button button--primary popup-success__button-cart' to={AppRoute.CART} onClick={_handleCloseClick}>Перейти в корзину</NavLink>
      <button
        className='popup-success__close'
        onClick={_handleCloseClick}
        aria-label='Continue'
      >
        Продолжить покупки
      </button>
    </section>
  );
}
