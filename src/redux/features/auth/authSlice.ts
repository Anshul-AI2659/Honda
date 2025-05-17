import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string | null;
    email: string | null;
    name: string | null;
  };
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: null,
    email: null,
    name: null,
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: {id: string; email: string; name: string};
        token: string;
      }>,
    ) => {
      const {user, token} = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
      state.user = {id: null, email: null, name: null};
      state.token = null;
    },
  },
});

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;
