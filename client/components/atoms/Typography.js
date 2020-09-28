import styled from 'styled-components';

const Typography = styled.div`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xl : theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme, color }) => (color ? color : theme.black)};
`;

export default Typography;
