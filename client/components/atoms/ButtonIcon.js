import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 25%;
  cursor: pointer;
  outline: 0;
  transition: all 0.2s;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.15);

  background: linear-gradient(
    60deg,
    ${({ colors }) => [colors[0], ',', colors[1]]}
  );

  &:hover {
    transform: translateY(-3px);
  }
`;

export default ButtonIcon;
