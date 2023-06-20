import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createModule = createAsyncThunk(
  "modules/createModule",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/test/modul/`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getModules = createAsyncThunk(
  "modules/getModules",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/test/modul/`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const moduleSlice = createSlice({
  name: "module",
  initialState: {
    moduleList: [],
    isLoading: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getModules.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getModules.fulfilled, (state, { payload }) => {
      state.moduleList = payload;
      state.isLoading = false;
    });
    builder.addCase(getModules.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default moduleSlice.reducer;
