import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }

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
  
    ${({ start }) =>
    start &&
    css`
      justify-content: flex-start;
    `}

	${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
`;

export default Container;
