import styled from 'styled-components';

const Paragraph = styled.p`
  display: inline-block;
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.xs : theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  line-height: 1.4;
`;

export default Paragraph;
