import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useDispatchWishlist, toggleWishlist } from 'Providers/WishlistProvider';
import { useUser } from 'utils/useUser';

import ButtonIcon from 'components/atoms/ButtonIcon';
import FavoriteIcon from '../../public/icons/favorite.svg';

const topBubbles = keyframes`
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
  }
  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
	}
 	100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
  	background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
`;

const bottomBubbles = keyframes`
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }
  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
	}
  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
  	background-size: 0% 0%, 0% 0%,  0% 0%,  0% 0%,  0% 0%,  0% 0%;
  }
`;

const StyledButton = styled(ButtonIcon)`

	&:before, &:after {
    position: absolute;
    content: '';
    display: block;
    width: 160%;
    height: 100%;
    left: -20%;
    z-index: -1000;
    transition: all ease-in-out 1s;
    background-repeat: no-repeat;
  }

	&:before {
    display: none;
    top: -75%;
    background-image:  
      radial-gradient(circle, #F50057 40%, transparent 40%),
			radial-gradient(circle,  transparent 40%, #F50057 40%, transparent 60%),
			radial-gradient(circle, #F50057 40%, transparent 40%), 
			radial-gradient(circle, #F50057 40%, transparent 40%),
			radial-gradient(circle,  transparent 20%, #F50057 30%, transparent 40%),
			radial-gradient(circle, #F50057 40%, transparent 40%),
			radial-gradient(circle, #FF8A80 40%, transparent 40%),
			radial-gradient(circle, #F50057 40%, transparent 40%),
			radial-gradient(circle, #FF8A80 40%, transparent 40%);
			background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
  }

	&:after {
    display: none;
    bottom: -75%;
    background-image:  
    radial-gradient(circle, #F50057 40%, transparent 40%), 
    radial-gradient(circle, #FF8A80 40%, transparent 40%),
    radial-gradient(circle,  transparent 20%, #F50057 30%, transparent 40%),
    radial-gradient(circle, #F50057 40%, transparent 40%),
    radial-gradient(circle, #FF8A80 40%, transparent 40%),
    radial-gradient(circle,  transparent 40%, #F50057 40%, transparent 60%),
    radial-gradient(circle, #F50057 40%, transparent 40%);
		background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
  }

	${({ added }) =>
    added &&
    css`
      background: ${({ theme }) => theme.white};
      transition: background 1s ease-in-out;
      &:before {
        display: block;
        animation: ${topBubbles} ease-in-out 1s forwards;
      }

		&:after {
      display: block;
      animation: ${bottomBubbles} ease-in-out 1s forwards;
    }

    svg {
      fill: #F50057;
      transition: fill 1s ease-in-out;
    }
  `}
`;

const WishlistButton = ({fill, colors, id}) => {
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
		<StyledButton fill={fill} colors={colors} added={added} onClick={() => handleWishlist(user.uid, id, dispatch)} >
      <FavoriteIcon />
    </StyledButton>
	)
};

export default WishlistButton;