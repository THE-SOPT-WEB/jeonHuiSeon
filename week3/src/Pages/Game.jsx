import ItemSelector from 'components/ItemSelector';
import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Game() {
  return (
    <StyledRoot>
      <h1>마블 히어로 월드컵</h1>
      <ItemSelector />
    </StyledRoot>
  );
}

export default Game;

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
`;
