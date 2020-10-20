import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 0;
  cursor: pointer;
  outline: 0;
  transition: all 0.2s;
  border-radius: ${({ circle }) => (circle ? '50%' : '25%')};
  box-shadow: ${({ flat }) => (flat ? 'none' : '2px 2px 16px rgba(0, 0, 0, 0.15)')};
  background: linear-gradient(60deg, ${({ colors }) => ( colors ? [colors[0], ',', colors[1]] : ['transparent', ',' ,'transparent'])}
  );

  &:hover {
    transform: ${({ flat }) => (flat ? 'translateY(0px)' : 'translateY(-5px)')};
  }

  svg {
    width: ${({ size }) => size ? size : '18px'};
    height: ${({ size }) => size ? size : '18px'};
    fill: ${({ fill, theme }) => fill ? fill : theme.black};
  }

  @media (min-width: 768px) {
    width: 42px;
    height: 42px;

    svg {
      width: ${({ size }) => size ? size : '24px'};
      height: ${({ size }) => size ? size : '24px'};
    }
  }
`;

const ButtonIcon = ({colors, icon, fill, size, flat, circle}) => <Button colors={colors} fill={fill} size={size} flat={flat} circle={circle}>{icon}</Button>;

export default ButtonIcon;
