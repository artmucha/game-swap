import styled from 'styled-components';

const SelectWrapper = styled.select`
  width: 100%;
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 8px;
  font-family: 'Kumbh Sans', sans-serif;
  outline: 0;
  color: ${({ theme }) => theme.grey300};

  option {
    padding: 15px;
  }
`;

const Select = ({options, onChange}) => {
    return (
        <SelectWrapper>
            {options.map( option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </SelectWrapper>
    )
}

export default Select;
