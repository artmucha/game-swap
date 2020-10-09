import Container from '../components/atoms/Container';
import Grid from '../components/atoms/Grid';
import Card from '../components/organisms/Card';

const Home = () => (
  <Container>
    <Grid s={2} m={3} l={4}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  </Container>
);

export default Home;
