import { createReducer } from "@reduxjs/toolkit";
import { PopupType } from "../../const";
import { setPopupOpen } from "../actions";

const initialState = {
  isAddPopupOpen: false,
  isDeletePopupOpen: false,
  isSuccessPopupOpen: false
};

export const modalData = createReducer(
  initialState,
  builder => {
    builder
      .addCase(setPopupOpen, (state, action) => {
        switch (action.payload.popupType) {
          case PopupType.ADD:
            state.isAddPopupOpen = action.payload.status;
            break;
          case PopupType.DELETE:
            state.isDeletePopupOpen = action.payload.status;
            break;
          case PopupType.SUCCESS:
            state.isSuccessPopupOpen = action.payload.status;
            break;
          default:
            return state
        }
      });
  }
);
