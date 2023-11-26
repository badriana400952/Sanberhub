import { configureStore } from "@reduxjs/toolkit";
import datauserReducer from "./dataSlice/DataUser";
import userReducer from "./user/UserSlice";
export default configureStore({
   reducer: {
      user: userReducer,
      data: datauserReducer,
   
   },
});
