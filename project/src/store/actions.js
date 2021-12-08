import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  SET_FILTER_VALUE: `catalog/setFilterValue`,
  SET_SORT_TYPE: `catalog/setSortType`,
  SET_SORT_DIRECTION: `catalog/setSortDirection`,
  ADD_CART_ITEM: `cart/addCartItem`,
  DELETE_CART_ITEM: `cart/deleteCartItem`,
  SET_CURRENT_ITEM: `cart/setCurrentItem`,
  SET_POPUP_OPEN: `modals/setPopupOpen`
}

export const setFilterValue = createAction(
  ActionType.SET_FILTER_VALUE,
  (type, name, value) => ({
    payload:  {type, name, value},
  }),
);

export const setSortType = createAction(
  ActionType.SET_SORT_TYPE,
  (type) => ({
    payload: type,
  }),
);

export const setSortDirection = createAction(
  ActionType.SET_SORT_DIRECTION,
  (direction) => ({
    payload: direction,
  }),
);

export const addCartItem = createAction(
  ActionType.ADD_CART_ITEM,
  (item) => ({
    payload: item,
  }),
);

export const deleteCartItem = createAction(
  ActionType.DELETE_CART_ITEM,
  (item, deleteCopies = false) => ({
    payload: {item, deleteCopies},
  }),
);

export const setCurrentItem = createAction(
  ActionType.SET_CURRENT_ITEM, (item) => ({
    payload: item,
  }),
);

export const setPopupOpen = createAction(
  ActionType.SET_POPUP_OPEN,
  (popupType, status) => ({
    payload:  {popupType, status},
  }),
);
