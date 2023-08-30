import AdCard from '../components/AdCard';
import Container from '../components/Container';
import IssueItem from '../components/IssueItem';
import Loading from '../components/Loading';
import { useScroll } from '../hooks/useScroll';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchIssueList } from '../store/slices/issueList';
import ErrorPage from './ErrorPage';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const scrollOffsetHeight = 10;

function Issues() {
  const dispatch = useAppDispatch();
  const { scrollHeight, scrollY } = useScroll();
  const { loading, data: issueList, error, page } = useAppSelector(state => state.issueList);

  useEffect(() => {
    issueList.length === 0 && dispatch(fetchIssueList(1));
  }, []);

  useEffect(() => {
    if (loading) return;
    if (scrollY > scrollHeight - 30) {
      dispatch(fetchIssueList(page + 1));
      return;
    }
  }, [loading, page, issueList, scrollY, scrollHeight]);

  if (error) {
    return <ErrorPage />;
  }
  return (
    <Container>
      <h1>리액트 이슈 목록</h1>
      <Ul>
        {issueList.map((issue, idx) => (
          <React.Fragment key={issue.issueNumber}>
            <IssueItem issue={issue} />
            {idx % 5 === 0 && idx !== 0 && (
              <li>
                <AdCard />
              </li>
            )}
          </React.Fragment>
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
