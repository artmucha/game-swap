import styled from 'styled-components';
import Card from '../components/molecules/Card';

const Home = () => (
  <Container>
    <Card />
  </Container>
);
const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
const Heading = styled.h1``;

export default Home;
