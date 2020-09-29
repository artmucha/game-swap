import styled from 'styled-components';
import Typography from '../atoms/Typography';
import Paragraph from '../atoms/Paragraph';
import ButtonIcon from '../atoms/ButtonIcon';

const CardWrapper = styled.article`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 8px;
  overflow: hidden;
  min-width: 280px;
  position: relative;
`;

const Cover = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  padding: 15px;
  background-color: ${({ theme }) => theme.white};
  position: relative;
`;

const Heading = styled.header`
  width: 100%;
  padding: 15px 15px 25px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;

const Card = () => {
  return (
    <CardWrapper>
      <Cover>
        <img src='https://images-na.ssl-images-amazon.com/images/I/714HVcBgw3L._AC_SX425_.jpg' />
        <Heading>
          <Paragraph small>5 dni temu</Paragraph>
          <Typography as='h2' color='#ffffff'>
            Rise of the Tomb Raider
          </Typography>
        </Heading>
      </Cover>
      <ContentWrapper>
        <ButtonIcon colors={['#F50057', '#FF8A80']}>
          <img src='./favorite.svg' alt='Dodaj do listy chcę zagrać' />
        </ButtonIcon>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;
