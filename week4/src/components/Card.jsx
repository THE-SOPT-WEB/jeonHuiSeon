import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

function Card({ name, url, phone, road }) {
  const handleClick = () => {
    location.href = 'tel:' + phone;
  };
  return (
    <StyledRoot>
      <h1>
        <a href={url}>{name}</a>
      </h1>
      <StyledWrapper>
        <button onClick={handleClick}>{phone ? phone : '번호가 없다'}</button>
        <span>{road}</span>
      </StyledWrapper>
    </StyledRoot>
  );
}

export default Card;

const StyledRoot = styled.li`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 3rem;
  background-color: white;
  border-radius: 20px;
  padding: 2rem;

  & a {
    color: ${theme.colors.point};
    text-decoration: none;
    font-size: 2.5rem;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > button {
    font-family: 'establishRetrosansOTF';
    background-color: ${theme.colors.main};
    border: 0;
    outline: 0;
    color: white;
    padding: 1rem;
    border-radius: 15px;
  }
  & > span {
    font-size: 1.5rem;
  }
`;
