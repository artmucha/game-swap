import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Card from 'components/organisms/Card';

const Platform = ({games}) => (
  <Container>
    <Grid s={2} m={3} l={4}>
      {games.map(game =><Card key={game._id} {...game} />)}
    </Grid>
  </Container>
);

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/games');
  const {data} = await res.json();

  const paths = data.map((game) => ({
    params: { platform: game.platform },
  }));

  return { paths, fallback: true }
}

export async function getStaticProps({params}) {
  const res = await fetch('http://localhost:3000/api/games?');
  const {data} = await res.json();

  return {
    props: { games: data }
  }
}


export default Platform;