import { NameSpace } from '../root-reducer';

export const getCartItems = (state) => state[NameSpace.CART].cartItems;
export const getCurrentItem = (state) => state[NameSpace.CART].currentItem;
