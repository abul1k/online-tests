import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $axios from "../../plugins/axios";
import { toast } from "react-toastify";

export const startTest = createAsyncThunk(
  "pastTest/startTest",
  async (payload, thunkAPI) => {
    try {
      const res = await $axios.post(`/test/test_result/start_test/`, payload);
      localStorage.setItem("testID", JSON.stringify(res.data.id));
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getTestsById = createAsyncThunk(
  "pastTest/getTestsById",
  async (id, thunkAPI) => {
    try {
      const res = await $axios.get(`/test/test_result/${id}/start_test_get/`);
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getExactTest = createAsyncThunk(
  "pastTest/getExactTest",
  async (params, thunkAPI) => {
    try {
      const res = await $axios.get(`test/test_result/get_detail_test/`, {
        params,
      });
      localStorage.setItem("exactTestID", JSON.stringify(res.data.id));

      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const submitTheAnswer = createAsyncThunk(
  "pastTest/startTest",
  async (payload, thunkAPI) => {
    try {
      const res = await $axios.patch(
        `/test/test_result/${payload.id}/test_check/`,
        payload
      );
      localStorage.setItem("testID", JSON.stringify(res.data.id));
      return res.data;
    } catch (err) {
      toast.error(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const pastTestSlice = createSlice({
  name: "pastTest",
  initialState: {
    testList: {
      isFilled: false,
    },
    exactTest: {
      isFilled: false,
    },
  },

  reducers: {},
  extraReducers: (builder) => {
    // get test
    builder.addCase(getTestsById.fulfilled, (state, { payload }) => {
      state.testList = payload;
      state.testList.isFilled = true;
    });
    builder.addCase(getTestsById.rejected, (state) => {
      state.testList.isFilled = false;
    });

    // get exact test
    builder.addCase(getExactTest.fulfilled, (state, { payload }) => {
      state.exactTest = payload;
      state.exactTest.isFilled = true;
    });
    builder.addCase(getExactTest.rejected, (state) => {
      state.exactTest.isFilled = false;
    });
  },
});

export default pastTestSlice.reducer;
