import { District } from './../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialUserState: District = {
  users: [],
  districtValue: null,
};

const setFiltersReducer = (state, action: PayloadAction<any>) => {
  return Object.assign({}, state, {
    users: action.payload,
  });
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: initialUserState,
  reducers: {
    filterByDistrict: setFiltersReducer,
    showActive: (state, action: PayloadAction<any>) => {
      state.users = state.users.filter(
        ({ active }) => active === action.payload
      );
    },
  },
});

export const { filterByDistrict, showActive } = filterSlice.actions;
export default filterSlice.reducer;
