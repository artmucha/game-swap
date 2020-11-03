import styled from 'styled-components';

import Input from 'components/atoms/Input';
import ButtonIcon from 'components/atoms/ButtonIcon';

import SearchIcon from '../../public/icons/search-button.svg';

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 8px;
  margin: 15px;
  background-color: ${({ theme }) => theme.white};
`;

const SearchInput = styled(Input)`
  border: 0;
`;

const SearchForm = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder="szukaj..." type='search' />
      <ButtonIcon flat fill="#E6E6E6">
        <SearchIcon />
      </ButtonIcon>
    </SearchWrapper>
  );
};

export default SearchForm;
