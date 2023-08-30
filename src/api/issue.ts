import instance from '.';
import { Issue, IssueDetail } from '../types';

export const LOAD_DATA_LENGTH = 15;

export const getIssueList = async (page = 1): Promise<Issue[]> => {
  const res = (
    await instance.get(
      `facebook/react/issues?per_page=${LOAD_DATA_LENGTH}&page=${page}&sort=comments`,
    )
  ).data;

  const data = res.map((issue: any) => ({
    id: issue.id,
    issueNumber: issue.number,
    title: issue.title,
    comments: issue.comments,
    createdAt: issue.created_at,
    user: {
      name: issue.user.login,
    },
  })) as Issue[];
  return data;
};
export const getIssuesDetail = async (issueNumber: number): Promise<IssueDetail> => {
  const res = (await instance.get(`facebook/react/issues/${issueNumber}`)).data;
  const data: IssueDetail = {
    id: res.id,
    issueNumber: res.number,
    title: res.title,
    comments: res.comments,
    createdAt: res.created_at,
    content: res.body,
    user: {
      name: res.user.login,
      avatar: res.user.avatar_url,
    },
  };

  return data;
};
