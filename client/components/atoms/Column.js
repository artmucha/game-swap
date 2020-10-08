import styled from 'styled-components';

const Column = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  max-width: 50%;

  @media (min-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
    max-width: 33.333%;
  }

  @media (min-width: 992px) {
    max-width: 25%;
  }
`;

export default Column;
