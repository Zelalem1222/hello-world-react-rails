import { configureStore } from "@reduxjs/toolkit";
import messages from "../redux/reducer/greetingReducer";

const store = configureStore({
  reducer: {
    messages,
  },
});

export default store;