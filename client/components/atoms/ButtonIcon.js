import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 0;
  cursor: pointer;
  outline: 0;
  position: relative;
  transition: all 0.2s;
  border-radius: ${({ circle }) => (circle ? '50%' : '25%')};
  box-shadow: ${({ flat }) => (flat ? 'none' : '2px 2px 16px rgba(0, 0, 0, 0.15)')};
  background: linear-gradient(60deg, ${({ colors }) => ( colors ? [colors[0], ',', colors[1]] : ['transparent', ',' ,'transparent'])}
  );

  &:hover {
    transform: ${({ flat }) => (flat ? 'translateY(0px)' : 'translateY(-5px)')};
  }

  svg {
    fill: ${({ fill, theme }) => fill ? fill : theme.black};
  }

  span {
    position: absolute;
    top: 0;
    right: -3px;
  }
`;

export default ButtonIcon;
