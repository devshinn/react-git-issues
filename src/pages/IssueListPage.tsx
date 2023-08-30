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

  useEffect(() => {
    issueList.length === 0 && dispatch(fetchIssueList(1));
  }, []);

  useEffect(() => {
    if (loading || scrollY === scrollHeight || !hasMore) return;
    if (scrollY > scrollHeight - scrollOffsetHeight) {
      dispatch(fetchIssueList(page + 1));
      return;
    }
  }, [loading, page, issueList, scrollY, scrollHeight, issueList]);

  if (error) {
    return <ErrorPage />;
  }
  return (
    <Container>
      <Title>리액트 이슈 목록</Title>
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

const Title = styled.h1`
  padding-left: 35px;
`;
