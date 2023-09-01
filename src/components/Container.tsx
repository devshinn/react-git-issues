import Header from './Header';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

function Container({ children }: { children: ReactNode }) {
  return (
    <ContainerStyle>
      <Header />
      <ContentWrap>{children}</ContentWrap>
    </ContainerStyle>
  );
}

export default Container;

const ContainerStyle = styled.div``;

const ContentWrap = styled.div`
  padding: 10px 20px;
  max-width: 1100px;
  margin: 0 auto;
`;
