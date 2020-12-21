import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Card from 'components/organisms/Card';
import Typography from 'components/atoms/Typography';
import NavigationList from 'components/atoms/NavigationList';

import FilterButton from '../../../public/icons/filters.svg';
import BackButton from '../../../public/icons/right-arrow.svg';

import { categories } from 'constans/filters';

const PageTitle = styled(Typography)`

  strong {
    text-transform: capitalize;
  }
`;

const MobileFilters = styled(Container)`
  @media(min-width: 992px) {
    display: none;
  }
`;

const CategoriesOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 98;
  display: ${({ open }) => open ? 'block' : 'none'};

  @media(min-width: 992px) {
    display: none;
  }
`;

const CategoriesWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all .2s linear;
  z-index: 99;

  @media(min-width: 992px) {
    position: static;
    width: 100%;
    max-width: 300px; 
    height: 100%;
    margin-right: 30px;
    transform: translateX(0);
    background-color: ${({ theme }) => theme.white};
  }
`;

const CategoriesList = styled(NavigationList)`
  a {
    font-weight: ${({ theme }) => theme.regular};
  }
`;

const CategoriesHeader = styled(Typography)`
  margin: 2rem 1.5rem;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 10px;
    vertical-align: sub;
    transform: rotate(180deg);

    @media(min-width: 992px) {
      display: none;
    }
  }
`;

const Platform = ({games, params}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <PageTitle as="h1" space big>Gry na <strong>{params.name.split('-').join(' ')}</strong></PageTitle>
      </Container>
      <MobileFilters flex spaceBetween alignCenter>
        <Typography as="h3" space small>Kategorie</Typography>
        <FilterButton onClick={() => setOpen(!open)} />
      </MobileFilters>
      <Container flex>
        <CategoriesOverlay open={open} onClick={() => setOpen(!open)}></CategoriesOverlay>
        <CategoriesWrapper open={open}>
          <CategoriesList>
            <CategoriesHeader as="h3" small onClick={() => setOpen(!open)}>
              <BackButton />
              Kategorie
            </CategoriesHeader>
            { categories.map(category => (
                <li key={category.value}>
                <Link href={`/gry/${params.name}/${category.slug}`}>
                  <a>{category.name}</a>
                </Link>
              </li>
            )) }
          </CategoriesList>
        </CategoriesWrapper>
        <Grid s={2} m={3}>
          {games.map(game =><Card key={game._id} {...game} />)}
        </Grid>
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/games');
  const { data } = await res.json();

  const paths = data.map((game) => ({
    params: { name: game.platform.value.name },
  }));

  return { paths, fallback: true }
};

export async function getStaticProps({params}) {
  const res = await fetch(`http://localhost:3000/api/games/${params.name}`);
  const {data} = await res.json();

  return {
    props: { games: data, params: params }
  }
}

export default Platform;