import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  GET_GUITARS: 'catalog/getGuitars',
  GET_PAGINATION: 'catalog/getPagination',
};

export const getGuitars = createAction(
  ActionType.GET_GUITARS,
  guitars => ({
    payload: guitars,
  }),
);

export const setPagination = createAction(
  ActionType.GET_PAGINATION,
  page => ({
    payload: page,
  }),
);

// export const ActionType = {
//   SET_FILTER_VALUE: `data/setFilterValue`,
//   SET_SORT_TYPE: `data/setSortType`,
//   SET_SORT_DIRECTION: `data/setSortDirection`,
//   ADD_CART_ITEM: `data/addCartItem`,
//   DELETE_CART_ITEM: `data/deleteCartItem`,
//   SET_CURRENT_ITEM: `data/setCurrentItem`,
//   SET_POPUP_OPEN: `app/setPopupOpen`
// }

// export const setFilterValue = createAction(
//   ActionType.SET_FILTER_VALUE,
//   (type, name, value) => ({
//     payload:  {type, name, value},
//   }),
// );

// export const setSortType = createAction(
//   ActionType.SET_SORT_TYPE,
//   (type) => ({
//     payload: type,
//   }),
// );

// export const setSortDirection = createAction(
//   ActionType.SET_SORT_DIRECTION,
//   (direction) => ({
//     payload: direction,
//   }),
// );

// export const addCartItem = createAction(
//   ActionType.ADD_CART_ITEM,
//   (item) => ({
//     payload: item,
//   }),
// );

// export const deleteCartItem = createAction(
//   ActionType.DELETE_CART_ITEM,
//   (item, deleteCopies = false) => ({
//     payload: {item, deleteCopies},
//   }),
// );

// export const setCurrentItem = createAction(
//   ActionType.SET_CURRENT_ITEM, (item) => ({
//     payload: item,
//   }),
// );

// export const setPopupOpen = createAction(
//   ActionType.SET_POPUP_OPEN,
//   (popupType, status) => ({
//     payload:  {popupType, status},
//   }),
// );
