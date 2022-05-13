import React from 'react';
import styled from 'styled-components';
import { turn } from 'styles/animation';

import Card from './Card';

function Result({ result }) {
  const { resultList, state } = result;
  switch (state) {
    case 'idle':
      return <StyledP state={state}>검색하세요</StyledP>;
    case 'pending':
      return <StyledLoading state={state}>🍜</StyledLoading>;
    case 'resolved':
      return resultList.length === 0 ? (
        <StyledP state={state}>없ㅋ</StyledP>
      ) : (
        <StyledUl>
          {resultList.map((shop) => (
            <Card
              key={shop.id}
              name={shop.place_name}
              url={shop.place_url}
              phone={shop.phone}
              road={shop.distance ? `${shop.distance}m` : shop.road_address_name}
            />
          ))}
        </StyledUl>
      );
  }
}

export default Result;

const StyledP = styled.p`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: ${({ state }) => (state === 'idle' ? '5rem' : '10rem')};
  color: white;
`;

const StyledLoading = styled.p`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 10rem;
  animation: ${turn} 1s infinite;
`;

const StyledUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  gap: 2rem;
`;
