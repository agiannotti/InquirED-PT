import { UserData, UsersState } from './../types/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return fetch(`users.json`).then((res) => res.json());
});

const initialUserState: UsersState = {
  users: [],
  status: 'idle',
};

export const userSlice = createSlice({
  name: 'users',
  initialState: initialUserState,
  reducers: {
    addUser: (state, action: PayloadAction<UserData>) => {
      state.users = [...state.users, action.payload];
    },
    editUser: (state, action: PayloadAction<UserData[]>) => {
      state.users = [...state.users, ...action.payload];
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(({ id }) => id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<UserData[]>) => {
        state.users = action.payload;
        state.status = 'successful';
      }
    );
  },
});

export const { addUser, editUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

export const selectUsers = (state) => state.users;
