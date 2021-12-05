// import { createSelector } from 'reselect';
// import { filterPrice } from '../utils';
// import { SortDirection, sortMap } from '../const';


// export const getGuitars = (state) => state.guitars;
// export const getFilters = (state) => state.filters;
// export const getSortType = (state) => state.sortType;
// export const getSortDirection = (state) => state.sortDirection;
// export const getCartItems = (state) => state.cartItems;
// export const getCurrentItem = (state) => state.currentItem;
// export const getAddPopupOpen = (state) => state.isAddPopupOpen;
// export const getDeletePopupOpen = (state) => state.isDeletePopupOpen;
// export const getSuccessPopupOpen = (state) => state.isSuccessPopupOpen;

// export const getFilteredItems = (items, filters) => {
//   const checkedTypes = filters.types.filter((filter) => filter.value === true)
//     .map((item) => item.name);

//   const checkedStrings = filters.strings.filter((filter) => filter.value === true)
//     .map((item) => item.name)

//   const [minPrice, maxPrice] = filters.price;

//   return items.filter((item) => {
//     return (!checkedTypes.length ? true : checkedTypes.includes(item.type))
//       & (!checkedStrings.length ? true : checkedStrings.includes(item.strings.toString()))
//       & filterPrice(item.price, minPrice.value, maxPrice.value);
//   })
// };

// export const selectFilteredItems = createSelector(
//   [getGuitars, getFilters],
//   getFilteredItems
// );


// const sort = (items, type, direction) => {
//   return (direction === SortDirection.DEC) ?
//     items.slice().sort((a, b) => b[sortMap[type]] - a[sortMap[type]]) :
//     items.slice().sort((a, b) =>  a[sortMap[type]] - b[sortMap[type]] )
// };

// export const selectSortedItems = createSelector(
//   [selectFilteredItems, getSortType, getSortDirection],
//   sort
// );
