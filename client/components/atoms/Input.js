import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 8px;
  font-family: 'Kumbh Sans', sans-serif;
  outline: 0;

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

export default Input;
