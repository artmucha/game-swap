import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.xs : theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme, color }) => (color ? color : theme.black)};
  line-height: 1.4;
`;

export default Paragraph;
