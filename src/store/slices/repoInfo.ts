import { createSlice } from '@reduxjs/toolkit';

export const repoNameSlice = createSlice({
  name: 'repositoryInfo', // 이름을 수정해줍니다. 공백을 포함하지 않는 것이 좋습니다.
  initialState: {
    orga: 'facebook',
    repo: 'react',
  },
  reducers: {
    updateOrgaRepo: (state, action) => {
      const { orga, repo } = action.payload;
      state.orga = orga;
      state.repo = repo;
    },
  },
});

export const { updateOrgaRepo } = repoNameSlice.actions;
export default repoNameSlice.reducer;
