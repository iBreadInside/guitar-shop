import { createReducer } from '@reduxjs/toolkit';
import { getGuitars, setPagination } from '../actions';

const initialState = {
  guitarList: [],
  paginationPage: null,
};

export const listData = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(getGuitars, (state, action) => {
        state.guitarList = action.payload;
      })
      .addCase(setPagination, (state, action) => {
        state.paginationPage = action.payload;
      });
  },
);
