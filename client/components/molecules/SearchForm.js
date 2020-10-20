import styled from 'styled-components';

import Input from 'components/atoms/Input';
import ButtonIcon from 'components/atoms/ButtonIcon';

import SearchIcon from '../../public/icons/search-button.svg';

const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 50px;
  margin: 15px;
  background-color: ${({ theme }) => theme.white};
`;

const SearchInput = styled(Input)`
  border: 0;
  width: 90%;
`;

const SearchForm = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder='szukaj' type='search' />
      <ButtonIcon flat fill="#E6E6E6" icon={<SearchIcon />} />
    </SearchWrapper>
  );
};

export default SearchForm;
