import styled, { css } from 'styled-components';
import Spinner from 'components/atoms/Spinner';

const StyledButton = styled.button`
  width: 180px;
  min-height: 48px;
  padding: 0 15px;
  border: 0;
  border-radius: 50px;
  outline: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  cursor: pointer;
  text-align: center;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.white};
  background: linear-gradient(60deg, ${({ colors }) => ([colors[0], ',', colors[1]])});

  ${({ center }) =>
    center &&
    css`
      display: block;
      margin: 0 auto;
  `}

  ${({ space }) =>
    space &&
    css`
      margin-top: 20px;
  `}

  ${({ success }) =>
    success &&
    css`
      background:linear-gradient(60deg, #43A047, #CDDC39);
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
  }
`;

const Button = ({ colors, space, center, loading, success, children }) => {
  return (
    <StyledButton colors={colors} space={space} center={center} success={success}>
      { loading ? <Spinner fill="#ffffff" /> : children }
    </StyledButton>
  );
};

export default Button;
