import { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Typography from 'components/atoms/Typography';
import Paragraph from 'components/atoms/Paragraph';
import Input from 'components/atoms/Input';
import TextArea from 'components/atom/TextArea';
import Button from 'components/atoms/Button';

import { platform, language, state } from 'constans/options';
import { debounce } from 'utils/helpers';

const Wrapper = styled.div`
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  background-color: ${({ theme }) => theme.white};

  p {
    margin-top: 20px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey200};
`;

const SearchInput = styled(Input)`
  border: 0;
  color: ${({ theme }) => theme.grey300};
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.grey200};
  border-radius: 12px;
  font-family: 'Kumbh Sans', sans-serif;
  outline: 0;
  color: ${({ theme }) => theme.grey300};

  option {
    padding: 15px;
  }
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

const NewPost = () => {

  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);
  const [data, setData] = useState({
    id: null,
    platform: {},
    title: '',
    slug: '',
    language: '',
    state: '',
    description: '',
    cover: '',
    rating: 0,
    genres: [],
    images: [],
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
        setResults(data.results);
      }, 2000)();
    } else {
      setActive(false);
      setResults([]);
    }
  }, []);

  const handleClick = (event, game) => {
    if(searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
    } else if (searchRef.current && searchRef.current.contains(event.target)) {
      setQuery(game.name);
      setData({ 
        ...data, 
        id: game.id,
        title: game.name,
        slug: game.slug,
        cover: game.background_image,
        rating: game.rating,
        genres: game.genres,
        images: game.short_screenshots
      });
      setActive(false);
    }
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const games = {...data, platform: JSON.parse(data.platform)}
    const res = await fetch('/api/games', {
      method: 'POST',
      body: JSON.stringify(games),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  return (
    <Container>
      <Typography as="h1" space big>Dodaj nowe ogłoszenie</Typography>
      <Wrapper>
        <form onSubmit={handleSubmit}>
        <Paragraph>
          Platforma*
        </Paragraph>
        <Select name="platform" value={data.platform} onChange={handleChange} required>
          {platform.map( option => (
            <option 
              key={option.value.name} 
              value={JSON.stringify(option)}
              default={option.default}
            >
              {option.name}
            </option>)
          )}
        </Select>
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
            required
          />
          {active && results.length > 0 && (
            <ResultsList>
              {results.map(({id, name, slug, genres, rating, background_image, short_screenshots}) => <li key={id} onClick={(event) => handleClick(event, {id, name, slug, genres, rating, background_image, short_screenshots})}>{name}</li>)}
            </ResultsList>
          )}
        </SearchWrapper>
        <Paragraph>
          Wersja językowa*
        </Paragraph>
        <Select name="language" value={data.language} onChange={handleChange} required>
          {language.map( option => (
            <option 
              key={option.value} 
              value={option.name}
              default={option.default}
            >
              {option.name}
            </option>)
          )}
        </Select>
        <Paragraph>
          Stan płyty*
        </Paragraph>
        <Select name="state" value={data.state} onChange={handleChange} required>
          {state.map( option => (
            <option 
              key={option.value} 
              value={option.name}
              default={option.default}
            >
              {option.name}
            </option>)
          )}
        </Select>
        <Paragraph>
          Dodatkowe informacje
        </Paragraph>
        <TextArea 
          rows="4"
          placeholder="np. opis, informacje dotyczące wydania" 
          name="description" 
          value={data.description} 
          onChange={handleChange}
        />
        <Button type="submit" colors={['#0072ff', '#00c6ff']} space center>Dodaj</Button>
        </form>
      </Wrapper>
    </Container>
  )
};

export default NewPost;