import styled, { css } from 'styled-components';

const Avatar = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 50%;
  background: ${({ theme }) => theme.grey200};
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
  }

  ${({ big }) =>
    big &&
    css`
      width: 84px;
      height: 84px;
      border: 4px solid ${({ theme }) => theme.white};
    `}
`;

export default Avatar;
