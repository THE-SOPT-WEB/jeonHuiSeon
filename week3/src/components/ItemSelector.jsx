import { items } from 'items';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { turn } from 'styles/animation';
import { theme } from 'styles/theme';

function ItemSelector({ handleRound, totalRound, currentRound }) {
  const navigate = useNavigate();
  const [winners, setWinners] = useState([]);
  const [matchList, setMatchList] = useState([{}]);

  useEffect(() => {
    setMatchList([...items.sort(() => Math.random() - 0.5)]);
    handleRound(items.length / 2, 1);
  }, []);

  useEffect(() => {
    if (matchList.length === 0) {
      if (winners.length === 1) {
        navigate('/end', { state: { winner: { ...winners[0] } } });
      }
      setMatchList([...winners]);
      setWinners([]);
      handleRound(totalRound / 2, 1);
    }
  }, [matchList]);

  const handleClick = (e, winner) => {
    setTimeout(() => {
      setWinners([...winners, winner]);
      setMatchList([...matchList.slice(2)]);
      handleRound(totalRound, currentRound + 1);
    }, 1000);
    e.target.classList.add('selected');
  };

  return (
    <StyledRoot>
      <StyledItem currentMatch={matchList[0]?.src} onClick={(e) => handleClick(e, matchList[0])}>
        <span>{matchList[0]?.name}</span>
      </StyledItem>
      <StyledItem currentMatch={matchList[1]?.src} onClick={(e) => handleClick(e, matchList[1])}>
        <span>{matchList[1]?.name}</span>
      </StyledItem>
      <span>VS</span>
    </StyledRoot>
  );
}

export default ItemSelector;

const StyledRoot = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  & > span {
    position: absolute;
    font-size: 6rem;
    color: white;
    text-shadow: 4px 4px ${theme.colors.main};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledItem = styled.article`
  display: flex;
  position: relative;
  flex: 1;
  height: 100%;
  background-image: url(${({ currentMatch }) => currentMatch});
  background-repeat: no-repeat;
  background-size: 100% 60%;
  background-position: center;
  cursor: pointer;

  &:hover {
    background-size: 120% 70%;
    flex: 1.5;
    transition: background-size 0.7s ease, flex 0.7s ease;
  }

  &.selected {
    animation: ${turn} 0.1s infinite;
  }

  & > span {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    position: absolute;
    top: 7%;
    color: white;
    padding: 1rem 0;
  }
`;
