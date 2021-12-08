import { createReducer } from '@reduxjs/toolkit';
import { SortDirection, SortType } from '../../const';
import { Filters } from '../../mocks/filters';
import guitars from '../../mocks/guitars';
import { setFilterValue, setSortDirection, setSortType } from '../actions';

const initialState = {
  guitars: guitars,
  filters: Filters,
  sortType: SortType.DEFAULT,
  sortDirection: SortDirection.DEFAULT,
};

export const catalogData = createReducer(
  initialState,
  builder => {
    builder
      .addCase(setFilterValue, (state, action) => {
        const filter = state.filters[action.payload.type].find((item) => item.name === action.payload.name);
        filter.value = action.payload.value;
      })
      .addCase(setSortType, (state, action) => {
        state.sortType = action.payload
      })
      .addCase(setSortDirection, (state, action) => {
        state.sortDirection = action.payload
      });
  },
);

