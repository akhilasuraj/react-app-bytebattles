import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {
    firstName: "john",
    lastName: "Colins",
    address: "2nd Lane, Toblewds, Egypt",
    birthDate: "1993/06/20",
    email: "test@geveo.com",
    publicAddress: "01ab0983-1884-45f6-b7ca-33ef48072d40",
    gender: "male",
    imageUrl: "https://sample/image.png",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;
