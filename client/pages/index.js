import Container from '../components/atoms/Container';
import Row from '../components/atoms/Row';
import Column from '../components/atoms/Column';
import Card from '../components/organisms/Card';
import Checker from '../components/atoms/Checker';

const Home = () => (
  <Container>
    <Checker></Checker>
    <Row>
      <Column>
        <Card />
      </Column>
      <Column>
        <Card />
      </Column>
      <Column>
        <Card />
      </Column>
      <Column>
        <Card />
      </Column>
      <Column>
        <Card />
      </Column>
    </Row>
  </Container>
);

export default Home;
