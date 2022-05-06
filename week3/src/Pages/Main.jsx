import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Main() {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <h2>💫 닥터 스트레인지 개봉 기념 💫</h2>
      <h1>마블 히어로 월드컵</h1>
      <StyledWrapper>
        <img
          src="https://p4.wallpaperbetter.com/wallpaper/742/518/461/comics-marvel-comics-logo-wallpaper-preview.jpg"
          alt="Logo"
        />
        <button onClick={() => navigate('game')}>GO!</button>
      </StyledWrapper>
    </StyledRoot>
  );
}

export default Main;

const StyledRoot = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: ${theme.colors.main};

  & > h1 {
    display: flex;
    align-items: center;
    font-size: 5rem;
    color: white;
  }

  & > h2 {
    font-size: 3rem;
    margin: 3rem 0;
    color: white;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 15rem;

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
