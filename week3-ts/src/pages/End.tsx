import crown from 'assets/crown.png';
import { itemTypes } from 'items';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function End() {
  const location = useLocation();
  const navigate = useNavigate();
  const { winner } = location.state as { winner: itemTypes };

  return (
    <StyledRoot>
      <h1>당신의 최애 마블 히어로는!</h1>
      <h2>⭐️{winner.name}⭐️</h2>
      <StyledItem winnerSrc={winner.src}>
        <img src={crown} alt="crown" />
      </StyledItem>
      <StyledBtnWrapper>
        <button onClick={() => navigate('/')}>다시하기</button>
      </StyledBtnWrapper>
    </StyledRoot>
  );
}

export default End;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${theme.colors.main};

  & > h1 {
    font-size: 5rem;
    margin: 3rem 0;
    color: white;
  }

  & > h2 {
    font-size: 6rem;
    color: white;
    margin-bottom: 8rem;
  }
`;

const StyledItem = styled.article<{ winnerSrc: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  flex: 1;
  background-image: url(${({ winnerSrc }) => winnerSrc});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > img {
    position: absolute;
    width: 13%;
    height: 45%;
    left: 50%;
    transform: translate(-50%, -60%);
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  padding: 4rem;

  & > button {
    width: 20rem;
    height: 5rem;
    border: 0;
    outline: 0;
    border-radius: 7px;
    background-color: black;
    color: white;
    font-size: 3rem;
    font-family: 'establishRetrosansOTF';
  }
`;
