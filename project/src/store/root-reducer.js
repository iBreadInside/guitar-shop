import { combineReducers } from "redux";
import { listData } from "./guitars/guitars";

export const NameSpace = {
  GUITAR_LIST: 'GUITAR_LIST',
};

export default combineReducers({
  [NameSpace.GUITAR_LIST]: listData,
});
