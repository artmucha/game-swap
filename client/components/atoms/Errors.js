import styled from 'styled-components';

const StyledErrors = styled.ul`
  margin-top: 20px;
  text-align: center;
  list-style-type: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  font-family: 'Kumbh Sans', sans-serif;
  line-height: 20px;
  color: red;
`;

const Errors = ({errors}) => {
  return (
    <StyledErrors>
      {errors.map( (error) => <li key={error}>{error}</li>)}
    </StyledErrors>
  );
};

export default Errors;