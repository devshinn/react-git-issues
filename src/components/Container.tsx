import { ReactNode } from 'react';
import { styled } from 'styled-components';

function Container({ children }: { children: ReactNode }) {
  return (
    <ContainerStyle>
      <Title>facebook / react</Title>
      <ContentWrap>{children}</ContentWrap>
    </ContainerStyle>
  );
}

export default Container;

const ContainerStyle = styled.div``;
const Title = styled.h1`
  padding: 10px;
  font-size: 18px;
  color: #f1f6ff;
  margin-bottom: 20px;
  border-bottom: solid 2px var(--border);
  background-color: #161616;
`;
const ContentWrap = styled.div`
  padding: 10px 20px;
  max-width: 1100px;
  margin: 0 auto;
`;
