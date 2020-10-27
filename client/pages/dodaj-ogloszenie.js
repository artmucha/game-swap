import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Typography from 'components/atoms/Typography';
import Paragraph from 'components/atoms/Paragraph';
import Select from 'components/atoms/Select';
import Input from 'components/atoms/Input';
import ButtonIcon from 'components/atoms/ButtonIcon';

import SearchIcon from '../public/icons/search-button.svg';

import { platform, language, state } from 'constans/options';

const Wrapper = styled.div`
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  background-color: ${({ theme }) => theme.white};

  p {
    margin-top: 20px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.white};
`;

const SearchInput = styled(Input)`
  border: 0;
`;

const NewPost = () => (
  <Container>
    <Typography as="h1">Dodaj nowe ogłoszenie</Typography>
    <Wrapper>
      <form>
      <Paragraph>
        Platforma
      </Paragraph>
      <Select options={platform} />
      <Paragraph>
        Tytuł
      </Paragraph>
      <SearchWrapper>
        <SearchInput placeholder="Wpisz tytuł" type="search" />
        <ButtonIcon flat  fill="#E6E6E6">
          <SearchIcon />
        </ButtonIcon>
      </SearchWrapper>
      <Paragraph>
        Wersja językowa
      </Paragraph>
      <Select options={language} />
      <Paragraph>
        Stan płyty
      </Paragraph>
      <Select options={state} />
      </form>
    </Wrapper>
  </Container>
);

export default NewPost;