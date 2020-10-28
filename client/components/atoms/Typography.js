import styled, { css } from 'styled-components';

const Typography = styled.div`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme, color }) => (color ? color : theme.black)};

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xl};
  `}

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
  `}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
  `}

`;

export default Typography;
