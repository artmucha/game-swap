import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Box from 'components/atoms/Box';

import homeMenu from 'constans/homeMenu';

const Tile = styled(Box)`
  padding: 10px;
  img {
    object-fit: contain;
  }

  @media(min-width: 768px) {
    padding: 15px;
  }
`;

const Home = () => (
  <Layout>
    <Container space flex>
      <Grid s={1} m={2}>
      {homeMenu.map(({ text, link, logo }) => (
        <Tile key={text}>
          <Link href={`/gry/${link}`}>
            <a><Image src={logo} width={300} height={100} quality={100} alt={text} /></a>
          </Link>
        </Tile>
      ))}
      </Grid>
    </Container>
  </Layout>
);

export default Home;
