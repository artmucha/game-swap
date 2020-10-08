import Container from '../components/atoms/Container';
import Row from '../components/atoms/Row';
import Column from '../components/atoms/Column';
import Card from '../components/organisms/Card';

const Home = () => (
    <Container>
      <Row>
        <Column>
          <Card />
        </Column>
        <Column>
          <Card />
        </Column><Column>
          <Card />
        </Column><Column>
          <Card />
        </Column><Column>
          <Card />
        </Column>
      </Row>
    </Container>
);

export default Home;
