import Container from '../components/Container';
import IssueItemDetail from '../components/IssueItemDetail';
import Loading from '../components/Loading';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchIssueDetail } from '../store/slices/issueDetail';
import ErrorPage from './ErrorPage';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

function IssueDetailPage() {
  const { issue_id } = useParams();

  const dispatch = useAppDispatch();
  const { loading, data: issue, error } = useAppSelector(state => state.issueDetail);
  useEffect(() => {
    dispatch(fetchIssueDetail(Number(issue_id)));
  }, []);

  if (error) {
    console.error(error);
    return <ErrorPage />;
  }
  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }
  return (
    <Container>
      <IssueItemDetail issue={issue} />
    </Container>
  );
}

export default IssueDetailPage;
