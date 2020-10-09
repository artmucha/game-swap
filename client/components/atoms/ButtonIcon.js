import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: ${({ circle }) => (circle ? '21px' : '25%')};
  cursor: pointer;
  outline: 0;
  transition: all 0.2s;
  box-shadow: ${({ flat }) =>
    flat ? 'none' : '2px 2px 16px rgba(0, 0, 0, 0.15)'};

  background: linear-gradient(
    60deg,
    ${({ colors }) => [colors[0], ',', colors[1]]}
  );

  &:hover {
    transform: ${({ circle }) =>
      circle ? 'translateY(0px)' : 'translateY(-5px)'};
  }

  @media (min-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;

export default ButtonIcon;
