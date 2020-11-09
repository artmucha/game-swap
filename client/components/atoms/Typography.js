import styled, { css } from 'styled-components';

const Typography = styled.div`
  display: block;
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

  ${({ space }) => 
    space &&
    css`
      margin: 2rem 0;
    `
  }

  @media(min-width: 768px) {
    ${({ space }) => 
    space &&
    css`
      margin: 4rem 0 2rem 0;
    `
  }
  }

`;

export default Typography;
