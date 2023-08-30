import Container from '../components/Container';
import IssueItem from '../components/IssueItem';
import Loading from '../components/Loading';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchIssueList } from '../store/slices/issueList';
import ErrorPage from './ErrorPage';
import { useEffect } from 'react';
import styled from 'styled-components';

function Issues() {
  const dispatch = useAppDispatch();
  const { loading, data: issueList, error } = useAppSelector(state => state.issueList);

  useEffect(() => {
    dispatch(fetchIssueList(1));
  }, [dispatch]);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Container>
      <h1>리액트 이슈 목록</h1>
      <Ul>
        {issueList.map(issue => (
          <IssueItem issue={issue} />
        ))}
      </Ul>
      {loading && <Loading />}
    </Container>
  );
}

export default Issues;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
