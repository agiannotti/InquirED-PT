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
      state.users = [
        ...state.users,
        action.payload,
        //   {
        //     first_name: '',
        //     last_name: '',
        //     email: '',
        //     verified: true,
        //     created_at: Date,
        //     middle_initial: '',
        //     district: 0,
        //     active: '',
        //   },
      ];
    },
    editUser: (state, action: PayloadAction<UserData>) => {
      console.log(action.payload);
    },
    deleteUser: (state, action: PayloadAction<UserData>) => {
      console.log(action.payload);
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

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

//eslint-disable-next-line
export const selectUsers = (state) => state.users;
