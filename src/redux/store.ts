import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';

const store = configureStore({
  reducer: {
    users: userSliceReducer,
  },
});
// export const selectUserList = (state: RootState) => state.users.users; //eslint-disable-line

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
