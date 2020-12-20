import styled from 'styled-components';

const NavigationList = styled.ul`
  overflow-y: auto;
  width: 100%;
  a,
  span {
    display: block;
    padding: 10px 15px;
    color: ${({ theme }) => theme.black};
    font-weight: ${({ theme }) => theme.bold};
    border-bottom: 1px solid ${({ theme }) => theme.grey200};
  }

  a:hover {
    background-color: ${({ theme }) => theme.grey100};
  }

  li {
    ul {
      a {
        padding: 10px 15px 10px 30px;
        font-weight: ${({ theme }) => theme.regular};
      }
    }
  }
`;

export default NavigationList;