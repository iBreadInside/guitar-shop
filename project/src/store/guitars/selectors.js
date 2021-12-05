import { NameSpace } from '../root-reducer';

export const getGuitarList = (state) => state[NameSpace.GUITAR_LIST].guitarList;
export const getPaginationPage = (state) => state[NameSpace.GUITAR_LIST].getPaginationPage;
