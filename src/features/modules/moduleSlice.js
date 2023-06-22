import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

export const createModule = createAsyncThunk(
  "modules/createModule",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/test/modul/`, payload);
      toast.success("successfully created");
      return res.data;
    } catch (err) {
      toast.error(err.message);
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
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const createTest = createAsyncThunk(
  "modules/createTest",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/test/create_test/`, payload);
      toast.success("successfully created");
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getTests = createAsyncThunk(
  "modules/getTests",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}/test/create_test/`);
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const moduleSlice = createSlice({
  name: "module",
  initialState: {
    moduleList: [],
    testList: [],
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

    builder.addCase(getTests.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTests.fulfilled, (state, { payload }) => {
      state.testList = payload;
      state.isLoading = false;
    });
    builder.addCase(getTests.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default moduleSlice.reducer;
