import styled from 'styled-components';
import Input from '../atoms/Input';
import ButtonIcon from '../atoms/ButtonIcon';

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 50px;
  margin: 0 15px;
  background-color: ${({ theme }) => theme.white};
`;

const SearchInput = styled(Input)`
  border: 0;
`;

const SearchForm = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder='szukaj' type='search' />
      <ButtonIcon flat circle colors={['transparent', 'transparent']}>
        <img src='./search.svg' alt='Szukaj' />
      </ButtonIcon>
    </SearchWrapper>
  );
};

export default SearchForm;
