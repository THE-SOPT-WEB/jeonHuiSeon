const { keyframes } = require('styled-components');

export const turn = keyframes`
  0% {
    transform: rotate(60deg);
  }
  20% {
    transform: rotate(120deg);
  }
  40% {
    transform: rotate(180deg);
  }
  60% {
    transform: rotate(240deg);
  }
  80% {
    transform: rotate(300deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
