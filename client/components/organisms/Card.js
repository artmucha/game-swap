import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { useDispatchWishlist, toggleWishlist } from 'Providers/WishlistProvider';
import { useUser } from 'utils/useUser';

import Typography from 'components/atoms/Typography';
import WishlistButton from 'components/molecules/WishlistButton';
import Paragraph from 'components/atoms/Paragraph';
import Badge from 'components/atoms/Badge';

import FavoriteIcon from '../../public/icons/favorite.svg';

const CardWrapper = styled.article`
  max-height: 380px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  background-color: ${({ theme }) => theme.white};
`;

const Cover = styled.div`
  position: relative;

  img {
    object-fit: cover;
  }
`;

const ActionButtons = styled.div`
  margin: -15px 10px 0 10px;
  padding: 0 0 10px 0;
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
    display: block;
    margin-top: 5px;
    @media (max-width: 576px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

const Card = ({id, title, cover, platform, language, state, slug, _id}) => {
  const { user } = useUser();
  const dispatch = useDispatchWishlist();
  const [added, setAdded] = useState(false);

  const handleWishlist = async(userUID, gameID, dispatch) => {
    try {
      await toggleWishlist(userUID, gameID, dispatch);
      setAdded(true);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <CardWrapper>
      <Link href={`/gra/${platform.value.name}/${slug}/${_id}`}>
        <a>
          <Cover>
            <Image src={cover} alt={title} width={270} height={300} quality={100} />
            <Heading>
              <Badge platform={platform.value.maker}>{platform.value.label}</Badge>
              <Typography as='h2' color='#ffffff'>
                {title}
              </Typography>
            </Heading>
          </Cover>
        </a>
      </Link>
      <ActionButtons>
        <WishlistButton fill="#ffffff" colors={['#F50057', '#FF8A80']} added={added}>
          <FavoriteIcon onClick={() => handleWishlist(user.uid, id, dispatch)} />
        </WishlistButton>
        <Paragraph small>Język: {language}</Paragraph>
        <Paragraph small>Stan: {state}</Paragraph>
      </ActionButtons>
    </CardWrapper>
  );
};

export default Card;
