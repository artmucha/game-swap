import styled from 'styled-components';
import Container from '../../../components/atoms/Container';
import Typography from '../../../components/atoms/Typography';

const Hero = styled.header`
  width: 100%;
  height: 70vh;
	background-color: ${({ theme }) => theme.playstation};
  position: relative;
  margin-left: 10px;
  border-bottom-left-radius: 4em;
  clip-path: polygon(0 0,100% 0,100% calc(100% - 2em),4em 100%,0 100%);
  overflow: hidden;

  @media (min-width: 768px) {
    margin-left: 15px;
    border-bottom-left-radius: 6.25em;
    clip-path: polygon(0 0,100% 0,100% calc(100% - 3em),6.25em 100%,0 100%);
  }
`;

export async function getStaticPaths() {
  const res = await fetch('https://.../posts');
  const { data } = await res.json();

  const paths = data.map((game) => ({
    params: { slug: game.slug, _id: game._id },
  }))

  return {
    paths: [
      { params: { slug, _id } }
    ],
    fallback: true
  };
}

const Product = () => {

  return (
    <article>
			<Hero>
        <Container>
        <img src='https://images-na.ssl-images-amazon.com/images/I/714HVcBgw3L._AC_SX425_.jpg' />
          <Typography as="h1" color='#ffffff'>Rise of the Tomb Raider</Typography>
        </Container>
			</Hero>
    </article>
  ) 
};

export default Product;
