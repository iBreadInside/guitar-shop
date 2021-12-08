import { NameSpace } from '../root-reducer';

export const getAddPopupOpen = (state) => state[NameSpace.MODALS].isAddPopupOpen;
export const getDeletePopupOpen = (state) => state[NameSpace.MODALS].isDeletePopupOpen;
export const getSuccessPopupOpen = (state) => state[NameSpace.MODALS].isSuccessPopupOpen;
