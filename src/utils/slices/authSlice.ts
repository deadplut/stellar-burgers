import { TUser } from '@utils-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi, TLoginData, TRegisterData } from '@api';

interface authState {
  authResponse: {
    refreshToken: string | null;
    accessToken: string | null;
    user: TUser | null;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: authState = {
  authResponse: null,
  loading: false,
  error: null
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData: TRegisterData, { rejectWithValue }) => {
    try {
      return await registerUserApi(userData);
    } catch (error) {
      return rejectWithValue('Не удалось зарегистрироваться.');
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: TLoginData, { rejectWithValue }) => {
    try {
      return await loginUserApi(loginData);
    } catch (error) {
      return rejectWithValue('Не удалось войти в систему');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.authResponse = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.authResponse = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default authSlice.reducer;
