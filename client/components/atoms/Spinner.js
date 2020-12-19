import styled, { keyframes  } from 'styled-components';
import SpinnerIcon from '../../public/icons/loading.svg';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(SpinnerIcon)`
  width: 24px;
  height: 24px;
  fill: ${({ fill, theme }) => fill ? fill : theme.black};
  animation: 1s ${spin} linear infinite;
`;

export default Spinner;
