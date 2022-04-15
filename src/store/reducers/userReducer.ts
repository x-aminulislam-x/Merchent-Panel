import { createSlice } from "@reduxjs/toolkit";
import { IUserData, IUserInfo } from "@interfaces/user.interface";
import { LocalStorageService } from "@services/utils/localstorage.service";

const userData: any = LocalStorageService.get("user_data");

const initialState: IUserInfo = {
  user_data: userData,
  accessToken: LocalStorageService.get("accessToken"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
