import styled, { css } from 'styled-components';

const Badge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 8px 3px;
  border-radius: 3px;
  text-align: center;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.white};
  background: ${({ theme, color }) => (color ? color : theme.playstation)};

  ${({ circle }) =>
    circle &&
    css`
      width: 21px;
      height: 21px;
      border-radius: 50%;
    `}
`;

export default Badge;
