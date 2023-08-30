import ErrorPage from './pages/ErrorPage';
import IssueDetailPage from './pages/IssueDetailPage';
import Issues from './pages/IssueListPage';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchIssueList } from './store/slices/issueList';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  //   const first = async () => {
  //     const issues = await getIssuesDetail(3542);
  //     console.info('info: ', issues);
  //   };

  const dispatch = useAppDispatch();
  const issueList = useAppSelector(state => state.issueList.data);
  const loading = useAppSelector(state => state.issueList.loading);

  useEffect(() => {
    dispatch(fetchIssueList(1));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/issues' element={<Issues />} />
        <Route path='/issues/:issue_id' element={<IssueDetailPage />} />
        <Route path='/*' element={<ErrorPage />} />
        {/* <div>
          <h1>react github issues</h1>
          <button onClick={first}>이슈불러오기</button>
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
