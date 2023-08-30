import styled from 'styled-components';

function Loading() {
  return <Styles>Loading...</Styles>;
}

export default Loading;

const Styles = styled.div`
  text-align: center;
  padding: 30px;
  border: solid 1px var(--border);
`;
