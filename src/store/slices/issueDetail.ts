import { getIssuesDetail } from '../../api/issue';
import { FetchIssueDetail, IssueDetail } from '../../types/index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchIssueDetail = createAsyncThunk(
  'react/issue-detail',
  async ({ issueNumber, orga, repo }: FetchIssueDetail, { rejectWithValue }) => {
    try {
      const issues = await getIssuesDetail({ issueNumber, orga, repo });
      return issues;
    } catch (error) {
      return rejectWithValue((error as { message: string }).message);
    }
  },
);

export const isssueDetailSlice = createSlice({
  name: 'issue-detail',
  initialState: { data: {} as IssueDetail, loading: false, error: null as string | null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIssueDetail.pending, state => {
        state.loading = true;
      })
      .addCase(fetchIssueDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchIssueDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default isssueDetailSlice.reducer;
