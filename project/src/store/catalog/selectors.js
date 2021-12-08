
import { createSelector } from 'reselect';
import { SortDirection, sortMap } from '../../const';
import { filterPrice } from '../../utils';
import { NameSpace } from '../root-reducer';

export const getGuitars = (state) => state[NameSpace.CATALOG].guitars;
export const getFilters = (state) => state[NameSpace.CATALOG].filters;
export const getSortType = (state) => state[NameSpace.CATALOG].sortType;
export const getSortDirection = (state) => state[NameSpace.CATALOG].sortDirection;

export const getFilteredItems = (items, filters) => {
  const checkedTypes = filters.types
    .filter((filter) => filter.value === true)
    .map((item) => item.name);

  const checkedStrings = filters.strings
    .filter((filter) => filter.value === true)
    .map((item) => item.name);

  const [minPrice, maxPrice] = filters.price;

  return items.filter((item) => {
    return (!checkedTypes.length ? true : checkedTypes.includes(item.type))
      & (!checkedStrings.length ? true : checkedStrings.includes(item.strings.toString()))
      & filterPrice(item.price, minPrice.value, maxPrice.value);
  });
};

export const selectFilteredItems = createSelector(
  [getGuitars, getFilters],
  getFilteredItems,
);

const sort = (items, type, direction) => {
  return (direction === SortDirection.DEC)
    ? items.slice().sort((a, b) => b[sortMap[type]] - a[sortMap[type]])
    : items.slice().sort((a, b) =>  a[sortMap[type]] - b[sortMap[type]]);
};

export const selectSortedItems = createSelector(
  [selectFilteredItems, getSortType, getSortDirection],
  sort,
);
