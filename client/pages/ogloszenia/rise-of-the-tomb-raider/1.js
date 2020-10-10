import styled from 'styled-components';
import Container from '../../../components/atoms/Container';
import Grid from '../../../components/atoms/Grid';
import Typography from '../../../components/atoms/Typography';
import Paragraph from '../../../components/atoms/Paragraph';

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
