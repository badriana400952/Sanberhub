import { createSlice } from "@reduxjs/toolkit";


import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiData } from "../../services/api";
const initialState = {
   detail: "",
   token: "",
   loading: false,
   error: "",
};


export const getUser = createAsyncThunk("user/getUser", async () => {
   try {
      const response = await ApiData.get(`/testapi/auth/me`, {
         headers: {
            Authorization: `Bearer ${localStorage.token}`,
         }
      });
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
});

export const registerUser = createAsyncThunk("user/registerUser", async (newData) => {
   try {
      const response = await ApiData.post(`/testapi/auth/register`, newData, {
         headers: {
            Authorization: `Bearer ${localStorage.token}`,
         }
      });
      return response.data;

   } catch (error) {
      console.log(error);
      throw error; 
   }
});


export const LoginUser = createAsyncThunk("user/LoginUser", async (login) => {
   try {
      const response = await ApiData.post(`/testapi/auth/login`, login, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.token}`,
         }
      });
      localStorage.setItem("token", response.data.token);
      return response.data
   } catch (error) {
      console.log(error);
      throw error;
   }
})


export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      addToken: (state) => {
         state.token = localStorage.getItem("token");
      },
      logout: (state) => {
         localStorage.removeItem("token");
         localStorage.removeItem("user");
         state.token = null;
         state.user = null;
      }

   },
   extraReducers: (builder) => {

      builder.addCase(getUser.pending, (state) => {
         state.loading = true;
         state.error = null
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      });
      builder.addCase(getUser.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message
      });

      // ////////////////// regis /////////////////////////////
      builder.addCase(registerUser.pending, (state) => {
         state.loading = true;
         state.error = null
      });
      builder.addCase(registerUser.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      });
      builder.addCase(registerUser.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message
      });

      ///////////login//////////////////

      builder.addCase(LoginUser.pending, (state) => {
         state.loading = true;
         state.error
      });
      builder.addCase(LoginUser.fulfilled, (state, { payload: { error, detail, token } }) => {
         state.loading = false;
         if (error) {
            state.error = error
         } else {
            state.detail = detail
            state.token = token
            localStorage.setItem("token", token);
            localStorage.setItem("detail", detail);
         }
      });
      builder.addCase(LoginUser.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message
      })


   },
});
export const {addToken, logout} = userSlice.actions;

export default userSlice.reducer;