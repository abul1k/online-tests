import { configureStore } from "@reduxjs/toolkit";

import moduleSlice from "./modules/moduleSlice";
import pastTestSlice from "./pastTest/pastTestSlice";

export const store = configureStore({
  reducer: {
    module: moduleSlice,
    pastTest: pastTestSlice
  },
  devTools: true,
});
