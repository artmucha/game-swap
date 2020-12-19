import styled from 'styled-components';

const TextArea = styled.textarea`
  border-radius: 12px;
  font-family: 'Kumbh Sans',sans-serif;
  padding: 15px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey200};

  &::placeholder {
    color: ${({ theme }) => theme.grey300};
  }
`;

export default TextArea;