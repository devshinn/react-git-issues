import AdCard from '../components/AdCard';
import Container from '../components/Container';
import IssueItem from '../components/issue/IssueItem';
import Loading from '../components/Loading';
import { useScroll } from '../hooks/useScroll';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchIssueList } from '../store/slices/issueList';
import ErrorPage from './ErrorPage';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

const scrollOffsetHeight = 30;

function Issues() {
  const dispatch = useAppDispatch();
  const { scrollHeight, scrollY } = useScroll();
  const {
    loading,
    data: issueList,
    error,
    page,
    hasMore,
  } = useAppSelector(state => state.issueList);

  const nextIssueDispatch = useCallback(() => {
    if (loading || !hasMore) return;
    dispatch(fetchIssueList(page + 1));
  }, [dispatch, hasMore, loading, page]);

  useEffect(() => {
    issueList.length && dispatch(fetchIssueList(1));
  }, []);

  useEffect(() => {
    if (scrollY === scrollHeight) return;
    if (scrollY > scrollHeight - scrollOffsetHeight) {
      nextIssueDispatch();
      return;
    }
  }, [scrollY, scrollHeight, nextIssueDispatch]);

  if (error) {
    return <ErrorPage />;
  }
  return (
    <Container>
      <Title>#issue</Title>
      <Ul>
        {issueList.map((issue, idx) => (
          <React.Fragment key={issue.issueNumber}>
            <IssueItem issue={issue} />
            {(idx + 1) % 4 === 0 && (
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

const Title = styled.h1`
  padding-left: 35px;
`;
