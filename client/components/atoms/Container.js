import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: center;
    `}

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}

	${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}
`;

export default Container;
