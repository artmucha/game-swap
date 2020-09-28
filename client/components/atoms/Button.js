import styled from 'styled-components';

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
  cursor: pointer;
  outline: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  background: linear-gradient(
    60deg,
    ${({ colors }) => [colors[0], ',', colors[1]]}
  );

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.2);
  }
`;

export default Button;
