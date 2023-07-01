import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $axios from "../../plugins/axios";
import { toast } from "react-toastify";

export const startTest = createAsyncThunk(
  "pastTest/startTest",
  async (payload, thunkAPI) => {
    try {
      const res = await $axios.post(`/test/test_result/start_test/`, payload);
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const pastTestSlice = createSlice({
  name: "pastTest",
  initialState: {},

  reducers: {},
  extraReducers: (builder) => {},
});

export default pastTestSlice.reducer;
