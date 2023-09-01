export type Issue = {
  id: number;
  issueNumber: number;
  title: string;
  createdAt: string;
  comments: number;
  user: {
    name: string;
  };
};

export type IssueDetail = {
  id: number;
  issueNumber: number;
  title: string;
  content: string;
  createdAt: string;
  comments: number;
  user: {
    name: string;
    avatar: string;
  };
};

export type FetchIssue = {
  page: number;
  repo: string;
  orga: string;
};
export type FetchIssueDetail = {
  issueNumber: number;
  repo: string;
  orga: string;
};
