import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearIssueList } from '../store/slices/issueList';
import { updateOrgaRepo } from '../store/slices/repoInfo';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

function Header() {
  const { orga, repo } = useAppSelector(state => state.repoName);
  const [orgaName, setOrgaName] = useState({ orga: '', repo: '' });
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();

  const updateOragName = useCallback(() => {
    if (!orgaName.orga || !orgaName.repo) {
      setIsEdit(false);
      return;
    }
    dispatch(updateOrgaRepo({ orga: orgaName.orga, repo: orgaName.repo }));
    dispatch(clearIssueList());
    setIsEdit(false);
  }, [dispatch, orgaName]);

  return (
    <HeaderStyle>
      {!isEdit ? (
        <div>
          <h3>
            {orga} / {repo}
          </h3>
          <button onClick={() => setIsEdit(true)}>Repo 변경</button>
        </div>
      ) : (
        <div>
          <input
            placeholder='Orgazination name'
            onChange={e => setOrgaName(old => ({ ...old, orga: e.target.value }))}
          />
          <input
            placeholder='Repository name'
            onChange={e => setOrgaName(old => ({ ...old, repo: e.target.value }))}
          />
          <button onClick={updateOragName}>확인</button>
        </div>
      )}
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.header`
  :first-child {
    display: flex;
    gap: 10px;
    h3 {
      font-size: 18px;
      color: #f1f6ff;
      background-color: #161616;
    }
  }
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: solid 2px var(--border);
`;
