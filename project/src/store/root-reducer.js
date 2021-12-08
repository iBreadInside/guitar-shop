import { combineReducers } from 'redux';
import { cartData } from './cart/cart';
import { catalogData } from './catalog/catalog';
import { modalData } from './modals/modals';

export const NameSpace = {
  CATALOG: 'CATALOG',
  CART: 'CART',
  MODALS: 'MODALS',
};

export default combineReducers({
  [NameSpace.CATALOG]: catalogData,
  [NameSpace.CART]: cartData,
  [NameSpace.MODALS]: modalData,
});
