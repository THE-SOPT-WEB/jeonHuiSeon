import { items } from 'items';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function ItemSelector() {
  const navigate = useNavigate();
  const [winners, setWinners] = useState([]);
  const [matchList, setMatchList] = useState(items.sort(() => Math.random() - 0.5));

  useEffect(() => {
    console.log(winners.length);
    if (matchList.length === 0) {
      if (winners.length === 1) {
        navigate('/end', { state: { winner: { ...winners[0] } } });
      }
      setMatchList([...winners]);
      setWinners([]);
    }
  }, [matchList]);

  const handleClick = (winner) => {
    setWinners([...winners, winner]);
    setMatchList(matchList.splice(2, 2));
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
  background-size: contain;
  background-position: center;
  /* background-color: black; */
  cursor: pointer;

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
