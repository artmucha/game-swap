import styled, { css } from 'styled-components';

const Badge = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px 3px;
  border-radius: 4px;
  text-align: center;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.white};
  background: ${({ theme, color }) => (color ? color : theme.pc)};

  ${({ circle }) =>
    circle &&
    css`
      width: 21px;
      height: 21px;
      border-radius: 50%;
    `}
`;

export default Badge;
