import React from 'react';
import styled from 'styled-components';
import { trans } from 'styles/animation';
import { theme } from 'styles/theme';

function Skeleton() {
  return (
    <StyledRoot>
      {/* <StyledBar /> */}
      <h2 />
      <StyledWrapper>
        <div />
        <span />
      </StyledWrapper>
    </StyledRoot>
  );
}

export default Skeleton;

const StyledRoot = styled.li`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 3rem;
  background-color: white;
  border-radius: 20px;
  padding: 2rem;

  & > h2 {
    background-color: ${theme.colors.gray};
    border-radius: 10px;
    width: 30%;
    height: 2rem;
    position: relative;
    overflow: hidden;
  }

  & > h2::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${trans} 2s infinite;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    background-color: ${theme.colors.gray};
    width: 10%;
    height: 2rem;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }
  & > div::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${trans} 2s infinite;
  }
  & > span {
    background-color: ${theme.colors.gray};
    border-radius: 10px;
    width: 20%;
    height: 2rem;
    overflow: hidden;
    position: relative;
  }
  & > span::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${trans} 2s infinite;
  }
`;

// const StyledBar = styled.div`
//   position: absolute;
//   width: 2rem;
//   height: 100%;
//   background-color: white;
//   margin-top: -2rem;
//   animation: ${trans} 2s infinite;
// `;
