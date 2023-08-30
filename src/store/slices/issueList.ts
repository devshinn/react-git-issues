import { getIssueList, LOAD_DATA_LENGTH } from '../../api/issue';
import { Issue } from '../../types/index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchIssueList = createAsyncThunk(
  'react/issue-list',
  async (page: number, { rejectWithValue }) => {
    try {
      const issues = await getIssueList(page);
      return { issues, page };
    } catch (error) {
      return rejectWithValue((error as { message: string }).message);
    }
  },
);
export const isssueListSlice = createSlice({
  name: 'issueList',
  initialState: {
    data: [] as Issue[],
    page: 0,
    loading: false,
    error: null as string | null,
    hasMore: true,
  },
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchIssueList.pending, state => {
        state.loading = true;
      })
      .addCase(fetchIssueList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload.issues];
        if (action.payload.issues.length < LOAD_DATA_LENGTH) {
          state.hasMore = false;
        }
        state.page = action.payload.page;
      })
      .addCase(fetchIssueList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default isssueListSlice.reducer;
