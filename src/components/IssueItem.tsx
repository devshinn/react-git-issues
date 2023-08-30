import { getDateform } from '../lib/utils';
import { Issue } from '../types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  issue: Issue;
};

function IssueItem({ issue }: Props) {
  return (
    <ItemWrap>
      <Link to={`${issue?.issueNumber}`}>
        <div>
          <span># {issue?.issueNumber}</span>
          <h3>{issue?.title}</h3>
          <div>
            <span>작성자:{issue?.user.name} </span>
            <span>작성일:{getDateform(issue?.createdAt)} </span>
          </div>
        </div>
        <span>comment : {issue?.comments}</span>
      </Link>
    </ItemWrap>
  );
}

export default IssueItem;

const ItemWrap = styled.li`
  border: solid 1px var(--border);
  padding: 10px;
  border-radius: 10px;
  a {
    text-decoration: none;
  }
`;
