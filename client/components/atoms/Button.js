import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 180px;
  padding: 15px;
  border: 0;
  border-radius: 50px;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.white};
  text-align: center;
  outline: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;
  cursor: pointer;
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

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
