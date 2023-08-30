import { getDateform } from '../lib/utils';
import { IssueDetail } from '../types';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import styled from 'styled-components';

function IssueItemDetail({ issue }: { issue: IssueDetail }) {
  return (
    <Wrap>
      <Header>
        <img src={issue?.user?.avatar} alt={`${issue?.user?.name} avatar`} />
        <div>
          <h3> {issue?.user?.name}</h3>
          <span> {getDateform(issue?.createdAt)}</span>
        </div>
        <div>
          <h4>#{issue?.issueNumber}</h4>
          <span>comment : {issue?.comments}</span>
        </div>
      </Header>
      <Contents>
        <h1 className='title'>{issue?.title}</h1>
        <ReactMarkdown className='content'>{issue.content}</ReactMarkdown>
      </Contents>
    </Wrap>
  );
}

export default IssueItemDetail;
const Wrap = styled.div`
  border: 1px solid var(--border);
  border-radius: 6px;
  position: relative;
  margin-left: 50px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px var(--border);
  padding: 10px;
  border-radius: 6px 6px 0 0;
  background-color: #161b22;
  gap: 10px;
  ::before {
    position: absolute;
    display: block;
    top: 11px;
    right: 100%;
    left: -8px;
    display: block;
    width: 8px;
    height: 16px;
    pointer-events: none;

    background-color: var(--border);
    content: ' ';
    clip-path: polygon(0 50%, 100% 0, 100% 100%);
  }

  img {
    position: absolute;
    left: -60px;
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }
  div:first-of-type {
    display: flex;
    gap: 5px;
    align-items: center;
    span {
      color: #636363;
    }
  }
  div:last-of-type {
    display: flex;
    gap: 5px;
    align-items: center;
    h4 {
      color: #3838ff;
    }
  }
`;

const Contents = styled.div`
  .title {
    padding: 10px;
    border-bottom: solid 1px var(--border);
  }
  .content {
    padding: 20px 10px;
    img {
      width: 100%;
    }
    a {
      color: skyblue;
    }
  }
`;
