import styled, { css } from 'styled-components';

const Avatar = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  min-width: 42px;
  height: 42px;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 50%;
  background: ${({ theme }) => theme.grey200};
  overflow: hidden;

  ${({ small }) =>
    small &&
    css`
      width: 34px;
      min-width: 34px;
      height: 34px;
    `}

  ${({ big }) =>
    big &&
    css`
      width: 84px;
      min-width: 84px;
      height: 84px;
      border: 4px solid ${({ theme }) => theme.white};
    `}

  @media(min-width: 768px) {
    ${({ big }) =>
    big &&
    css`
      width: 160px;
      min-width: 160px;
      height: 160px;
    `}
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default Avatar;
