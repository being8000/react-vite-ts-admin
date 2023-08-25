import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api, { ResponseType } from "@/utils/request";
import { RootState } from "../store";

const SYSTEM_ACCOUNT_TOKEN = "SYSTEM_ACCOUNT_TOKEN";

export const getToken = (): string | null => {
  return localStorage.getItem(SYSTEM_ACCOUNT_TOKEN);
};

export interface LoginForm {
  username: string;
  password: string;
  msgCode: string;
}

type Button = {
  id: number;
  parentId: number;
  resouces: string;
  title: string;
  titleEn: string;
  children: Button[];
};
export interface User {
  avatar: string;
  email: string;
  nickName: string;
  username: string;
  phone: string;
  buttons: Button[];
  roles: string[];
}
export interface UserState {
  token: string | null;
  user: User | null;
}

const initialState: UserState = {
  token: localStorage.getItem(SYSTEM_ACCOUNT_TOKEN),
  user: null,
};

interface LoginResponse {
  token: string;
}

export const login = createAsyncThunk("user/login", async (form: LoginForm) => {
  try {
    const response = await api.POST<LoginResponse>("Login", form);
    const token = response.data.token;
    localStorage.setItem(SYSTEM_ACCOUNT_TOKEN, token);
    return token;
  } catch (error) {
    return Promise.reject((error as ResponseType<null>)?.message || error);
  }
});
export const userInfo = createAsyncThunk("user/info", async () => {
  try {
    const response = await api.POST<User>("UserInfo", {});
    return response.data;
  } catch (error) {
    return Promise.reject((error as ResponseType<null>)?.message || error);
  }
  // The value we return becomes the `fulfilled` action payload
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUserInfo: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem(SYSTEM_ACCOUNT_TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload;
      console.log("login");
    });
    builder.addCase(userInfo.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const selectToken = (state: RootState) => {
  return state.user.token;
};

export const selectUser = (state: RootState) => state.user.user;
export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice;
