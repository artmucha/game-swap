import styled from 'styled-components';
import Typography from '../atoms/Typography';
import ButtonIcon from '../atoms/ButtonIcon';
import Paragraph from '../atoms/Paragraph';
import Badge from '../atoms/Badge';
import Avatar from '../atoms/Avatar';

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

const ActionButtons = styled.div`
  margin: -15px 15px 0 15px;
  padding: 0 0 15px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};
  position: relative;

  button {
    margin-right: 10px;
    margin-bottom: 15px;
  }
`;

const ContentWrapper = styled.div`
  padding: 15px;
  background-color: ${({ theme }) => theme.white};
`;

const Heading = styled.header`
  width: 100%;
  padding: 15px 15px 25px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

  h2 {
    margin-top: 5px;
  }
`;

const Card = () => {
  return (
    <CardWrapper>
      <Cover>
        <img src='https://images-na.ssl-images-amazon.com/images/I/714HVcBgw3L._AC_SX425_.jpg' />
        <Heading>
          <Badge>ps4</Badge>
          <Typography as='h2' color='#ffffff'>
            Rise of the Tomb Raider
          </Typography>
        </Heading>
      </Cover>
      <ActionButtons>
        <ButtonIcon colors={['#0072ff', '#00c6ff']}>
          <img src='./list.svg' alt='Dodaj do swojej listy' />
        </ButtonIcon>
        <ButtonIcon colors={['#F50057', '#FF8A80']}>
          <img src='./favorite.svg' alt='Dodaj do listy chcę zagrać' />
        </ButtonIcon>
        <Paragraph small>Język: Angielski</Paragraph>
        <Paragraph small>Stan: Idealny (jak nowa)</Paragraph>
      </ActionButtons>
      <ContentWrapper>
        <Avatar>
          <img src='./ArturMucha.jpg' alt='Dodaj do swojej listy' />
        </Avatar>
        <Avatar>
          <img src='./ArturMucha.jpg' alt='Dodaj do swojej listy' />
        </Avatar>
        <Avatar>
          <img src='./ArturMucha.jpg' alt='Dodaj do swojej listy' />
        </Avatar>
        <Avatar>
          <img src='./ArturMucha.jpg' alt='Dodaj do swojej listy' />
        </Avatar>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;
