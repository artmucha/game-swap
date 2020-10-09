import styled from 'styled-components';
import Typography from '../atoms/Typography';
import ButtonIcon from '../atoms/ButtonIcon';
import Paragraph from '../atoms/Paragraph';
import Badge from '../atoms/Badge';
import Avatar from '../atoms/Avatar';

const CardWrapper = styled.article`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
`;

const Cover = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
  }
`;

const ActionButtons = styled.div`
  margin: -15px 10px 0 10px;
  padding: 0 0 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grey200};
  position: relative;

  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    margin: -15px 15px 0 15px;
    padding: 0 0 15px 0;

    button {
    margin-bottom: 15px;
  }
  }
`;

const ContentWrapper = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.white};

  @media (min-width: 768px) {
    padding: 15px;
    display: flex;
    align-items: center;
  }
`;

const Heading = styled.header`
  width: 100%;
  padding: 10px 10px 20px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

  @media (min-width: 768px) {
    padding: 15px 15px 25px;
  }

  h2 {
    margin-top: 5px;
    @media (max-width: 576px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
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
        <ButtonIcon colors={['#F50057', '#FF8A80']}>
          <img src='./favorite.svg' alt='Dodaj do listy chcę zagrać' />
        </ButtonIcon>
        <Paragraph small>Język: Angielski</Paragraph>
        <Paragraph small>Stan: Jak nowa</Paragraph>
      </ActionButtons>
      <ContentWrapper>
        <Avatar small>
          <img src='./ArturMucha.jpg' alt='Dodaj do swojej listy' />
        </Avatar>
        <Avatar small>
          <img src='./ArturMucha.jpg' alt='Dodaj do swojej listy' />
        </Avatar>
        <Avatar small>
          <img src='./ArturMucha.jpg' alt='Dodaj do swojej listy' />
        </Avatar>
        <Paragraph small>+10 ma tę grę</Paragraph>
      </ContentWrapper>
    </CardWrapper>
  );
};

export default Card;
