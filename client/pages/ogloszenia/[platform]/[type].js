import { useRouter } from 'next/router'
import Container from '../../../components/atoms/Container';
import Grid from '../../../components/atoms/Grid';
import Card from '../../../components/organisms/Card';

const Products = ({products}) => {
  const router = useRouter();
  const { platform, type } = router.query;

  return (
    <>
      <p>Platform: {platform}</p>
      <p>Post: {type}</p>
      <Container>
        <Grid s={2} m={3} l={4}>
            {products.map(product => <div>{product.title}</div>)}
        </Grid>
      </Container>
    </>
  ) 
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { platform: '1' } },
      { params: { type: '3' } },
    ],
    fallback: true
  };
};

export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.rawg.io/api/games?parent_platforms=${params.platform}&platforms=${params.type}`);
  const products = await res.json();

  return {
    props: { products },
    revalidate: 1,
  };
};

export default Products;
