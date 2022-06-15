import { keyframes } from 'styled-components';

export const trans = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(150px);
  }
`;
