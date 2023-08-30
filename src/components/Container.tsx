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
  font-size: 20ox;
  color: #0755ff;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: solid 2px #0755ff;
`;
const ContentWrap = styled.div`
  padding: 10px 20px;
  max-width: 1100px;
  margin: 0 auto;
`;
