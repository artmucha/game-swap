import styled from 'styled-components';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Typography from 'components/atoms/Typography';
import Badge from 'components/atoms/Badge';
import Paragraph from 'components/atoms/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon';

import FavoriteIcon from '../../../../public/icons/favorite.svg';
import SwapIcon from '../../../../public/icons/refresh-button.svg';

const Article = styled.article`
  overflow-x: hidden;
`;

const Hero = styled.header`
  width: 100%;
  height: 70vh;
	background-color: ${({ theme }) => theme.playstation};
  position: relative;
  margin-left: 10px;
  border-bottom-left-radius: 4em;
  clip-path: polygon(0 0,100% 0,100% calc(100% - 1em),4em 100%,0 100%);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    margin-left: 50px;
    border-bottom-left-radius: 6.25em;
    clip-path: polygon(0 0,100% 0,100% calc(100% - 2em),6.25em 100%,0 100%);
  }
`;

const Heading = styled.div`
  width: 100%;
  padding: 10px 10px 20px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

  * {
    color: ${({ theme }) => theme.white};
  }

  & > div {
    max-width: 1300px;
  }

  h1 {
    display: block;
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    padding: 15px 15px 25px;
  }
`;

const Gallery = styled.div`
  img {
    width: 100%;
  }
`;

const AuthorContent = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const ActionButtons = styled.div`
  button:first-of-type {
    margin-right: 10px;
  }

  @media (min-width: 768px) {
    margin-top: 5px;
  }
`;

const Product = ({game}) => {

  return (
    <Layout>
      <Article>
        <Hero>
          <img src={game.cover} alt={game.title} />
            <Heading>
              <Container>
                <Badge platform={game.platform.value.maker}>{game.platform.value.label}</Badge>
                <Typography as="h1" big>{game.title}</Typography>
                <Paragraph>Język: {game.language}</Paragraph>
                <Paragraph>Stan: {game.state}</Paragraph>
              </Container>
            </Heading>
        </Hero>
        <Container>
          <AuthorContent>
            <div>
              <Paragraph>Dodał: <strong>Artur</strong></Paragraph>
              <Paragraph>Skąd: <strong>Kraków</strong></Paragraph>
              <Paragraph>Dodano: <strong>08.11.2020</strong></Paragraph>
            </div>
            <ActionButtons>
              <ButtonIcon fill="#ffffff" colors={['#F50057', '#FF8A80']} title="Dodaj do Wishlisty">
                <FavoriteIcon />
              </ButtonIcon>
              <ButtonIcon fill="#ffffff" colors={['#0072ff', '#00c6ff']} title="Zaproponuj wymianę">
                <SwapIcon />
              </ButtonIcon>
            </ActionButtons>
          </AuthorContent>
        </Container>
        {game.description ? 
          (
            <Container>
            <Typography as="h2" space>Opis</Typography>
              <Paragraph>{game.description}</Paragraph>
              </Container>
          ) : null
        }
        
        {game.images && game.images.length ?
          (<Container>
            <Gallery>
              <Typography as="h2" space>Galeria</Typography>
              <Grid s={2} m={4}>
                { game.images.map(screen => (
                  <img key={screen.id} src={screen.image} alt={game.title} />
                )) }
              </Grid>
            </Gallery>
          </Container>
          ) : null
        }
      </Article>
    </Layout>
  ) 
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/games');
  const { data } = await res.json();

  const paths = data.map((game) => ({
    params: { maker: game.platform.value.maker, name: game.platform.value.name, slug: game.slug, _id: game._id },
  }));

  return { paths, fallback: true }
};

export async function getStaticProps({params}) {
  const res = await fetch(`http://localhost:3000/api/game/${params._id}`);
  const {data} = await res.json();

  return {
    props: { game: data }
  }
}

export default Product;
