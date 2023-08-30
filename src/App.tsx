import ErrorPage from './pages/ErrorPage';
import IssueDetailPage from './pages/IssueDetailPage';
import Issues from './pages/IssueListPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/issues'} />} />
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
