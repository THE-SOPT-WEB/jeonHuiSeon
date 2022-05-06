import { items } from 'items';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function ItemSelector() {
  const navigate = useNavigate();
  const winners = useRef([]);
  const [matchList, setMatchList] = useState([{}]);

  useEffect(() => {
    setMatchList([...items.sort(() => Math.random() - 0.5)]);
  }, []);

  useEffect(() => {
    if (matchList.length === 0) {
      if (winners.current.length === 1) {
        navigate('/end', { state: { winner: { ...winners.current[0] } } });
      }
      setMatchList([...winners.current]);
      winners.current = [];
    }
  }, [matchList]);

  const handleClick = (winner) => {
    winners.current.push(winner);
    matchList.splice(0, 2);
    setMatchList([...matchList]);
  };

  return (
    <StyledRoot>
      <StyledItem currentMatch={matchList[0]?.src} onClick={() => handleClick(matchList[0])}>
        <span>{matchList[0]?.name}</span>
      </StyledItem>
      <StyledItem currentMatch={matchList[1]?.src} onClick={() => handleClick(matchList[1])}>
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
  background-size: 100% 50%;
  background-position: center;
  /* background-color: black; */
  cursor: pointer;

  &:hover {
    background-size: 120% 70%;
    flex: 1.5;
    transition: background-size 0.7s ease, flex 0.7s ease;
  }

  & > span {
    width: 100%;
    text-align: center;
    font-size: 3rem;
    position: absolute;
    bottom: 3rem;
    color: white;
    padding: 1rem 0;
    background-color: ${theme.colors.main};
  }
`;
