import ItemSelector from 'components/ItemSelector';
import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Game() {
  const [totalRound, setTotalRound] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);

  const handleRound = (total, current) => {
    setTotalRound(total);
    setCurrentRound(current);
  };

  return (
    <StyledRoot>
      <h1>마블 히어로 월드컵 {totalRound === 1 ? '결승' : totalRound === 2 ? '준결승' : `${totalRound}강`}</h1>
      <h2>
        {currentRound}/{totalRound}
      </h2>
      <ItemSelector handleRound={handleRound} totalRound={totalRound} currentRound={currentRound} />
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

  & > h2 {
    font-size: 4rem;
    color: white;
  }
`;
