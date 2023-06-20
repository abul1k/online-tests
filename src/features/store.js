import { configureStore } from "@reduxjs/toolkit";

import moduleSlice from "./modules/moduleSlice";

export const store = configureStore({
  reducer: {
    module: moduleSlice,
  },
  devTools: true,
});
