import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Card from 'components/organisms/Card';

const Home = ({games}) => (
  <Container>
    <Grid s={2} m={3} l={4}>
      {games.map(game => <Card {...game} />)}
    </Grid>
  </Container>
);

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/games');
  const {data} = await res.json();

  return {
    props: {games:data}
  }
}


export default Home;
