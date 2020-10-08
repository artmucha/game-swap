import styled, { css } from 'styled-components';

const Row = styled.div`
  position: reltive;
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;

  @media (min-width: 768px) {
    margin-left: -15px;
    margin-right: -15px;
  }

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

export default Row;
