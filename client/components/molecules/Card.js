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
  z-index: 1;
`;

const Card = () => {
  return (
    <CardWrapper>
      <Cover>
        <img src='https://images-na.ssl-images-amazon.com/images/I/714HVcBgw3L._AC_SX425_.jpg' />
        <Heading>
          <Typography as='h2' color='#ffffff'>
            Rise of the Tomb Raider
          </Typography>
        </Heading>
      </Cover>
      <ContentWrapper>
        <ButtonIcon colors={['#F50057', '#FF8A80']}>
          <img src='./favorite.svg' alt='Dodaj do listy chcę zagrać' />
        </ButtonIcon>
        <Paragraph small>
          Rise of the Tomb Raider – przygodowa gra akcji stworzona przez Crystal
          Dynamics, wydana przez Microsoft Studios[7] (wersje PC, Xbox One i
          Xbox 360) i Square Enix (wersja PlayStation 4). Stanowi kontynuację
          Tomb Raidera z 2013 roku. Premiera na konsolę Xbox One i Xbox 360
          odbyła się 10 listopada 2015 w Ameryce Północnej i 13 listopada 2015
          roku w Europie. Wersja na komputery osobiste ukazała się 28 stycznia
          2016[4], zaś na PlayStation 4 – 11 października 2016.
        </Paragraph>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;
