import { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Typography from 'components/atoms/Typography';
import Paragraph from 'components/atoms/Paragraph';
import Select from 'components/atoms/Select';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

import { platform, language, state } from 'constans/options';
import { debounce } from 'functions/helpers';

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
  flex-direction: column;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey200};
`;

const SearchInput = styled(Input)`
  border: 0;
  color: ${({ theme }) => theme.grey300};
`;

const ResultsList = styled.ul`
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;

  li {
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 10px 15px;
    color: ${({ theme }) => theme.grey300};
    font-weight: ${({ theme }) => theme.regular};
    font-size: ${({ theme }) => theme.fontSize.s};

    &:hover {
      background-color: ${({ theme }) => theme.grey100};
    }
  }
`;

const TextArea = styled.textarea`
  border-radius: 8px;
  font-family: 'Kumbh Sans',sans-serif;
  padding: 15px;
  width: 100%;
  color: ${({ theme }) => theme.grey300};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey200};

  &::placeholder {
    color: ${({ theme }) => theme.grey300};
  }
`;

const NewPost = () => {

  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);
  const [data, setData] = useState({
    platform: '',
    language: '',
    state: ''
  });

  const searchURL = (query) => `https://api.rawg.io/api/games?search=${query}`;

  const handleSearch = useCallback((event) => {
    const query = event.target.value;
    setActive(true);
    setQuery(query);
    if(query.length >=2) {
      debounce(async() => {
        const res = await fetch(searchURL(query));
        const data = await res.json();
        console.log(data.results)
        setResults(data.results);
      }, 2000)();
    } else {
      setActive(false);
      setResults([]);
    }
  }, []);

  const handleClick = useCallback((event, title) => {
    if(searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
    } else if (searchRef.current && searchRef.current.contains(event.target)) {
      setQuery(title);
      setActive(false);
    }
  }, []);

  const handleChange = useCallback((value) => {
    console.log(value)
  },[]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Container>
      <Typography as="h1">Dodaj nowe ogłoszenie</Typography>
      <Wrapper>
        <form onSubmit={handleSubmit}>
        <Paragraph>
          Platforma*
        </Paragraph>
        <Select name="platform" options={platform} value={data.platform} onChange={handleChange} />
        <Paragraph>
          Tytuł*
        </Paragraph>
        <SearchWrapper ref={searchRef}>
          <SearchInput 
            placeholder="Wyszukaj tytuł (wpisz conajmniej 2 znaki)" 
            type="text"  
            value={query}
            name="title"
            onChange={handleSearch}
          />
          {active && results.length > 0 && (
            <ResultsList>
              {results.map(({id, name}) => <li key={id} onClick={(event) => handleClick(event, name)}>{name}</li>)}
            </ResultsList>
          )}
        </SearchWrapper>
        <Paragraph>
          Wersja językowa*
        </Paragraph>
        <Select name="language" options={language} value={data.language} onChange={handleChange} />
        <Paragraph>
          Stan płyty*
        </Paragraph>
        <Select name="state" options={state} value={data.state} onChange={handleChange} />
        <Paragraph>
          Dodatkowe informacje
        </Paragraph>
        <TextArea placeholder="np. opis, informacje dotyczące wydania" />
        <Button type="submit" colors={['#0072ff', '#00c6ff']} space center>Dodaj</Button>
        </form>
      </Wrapper>
    </Container>
  )
};

export default NewPost;