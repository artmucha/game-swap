import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Card from 'components/organisms/Card';
import Typography from 'components/atoms/Typography';

const Platform = ({games, platform}) => (
  <Container>
    <Typography as="h1" space big>Gry na {platform}</Typography>
    <Grid s={2} m={3} l={4}>
      {games.map(game =><Card key={game._id} {...game} />)}
    </Grid>
  </Container>
);

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/games');
  const {data} = await res.json();

  const paths = data.map((game) => ({
    params: { maker: game.platform.value.maker, name: game.platform.value.name },
  }));

  return { paths, fallback: true }
}

export async function getStaticProps({params}) {
  const res = await fetch('http://localhost:3000/api/games');
  const {data} = await res.json();

  return {
    props: { games: data }
  }
}


export default Platform;