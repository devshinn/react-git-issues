import { styled } from 'styled-components';

function AdCard() {
  const imgUrl =
    'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=200&q=100';
  return (
    <Styles href=' https://www.wanted.co.kr' target='_blank'>
      <img src={imgUrl} alt='wanted-logoimage' />
    </Styles>
  );
}

export default AdCard;

const Styles = styled.a`
  display: block;
  height: 100px;
  background-color: #f79df7;
  border-radius: 6px;
  padding: 20px;
`;
