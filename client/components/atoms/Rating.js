import styled from 'styled-components';

import StarIcon from '../../public/icons/star.svg'

const RatingWrapper = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.xs};

  strong {
    margin-left: 5px;
  }
`;

const Rating = ({rating}) => <RatingWrapper><StarIcon /><strong>{rating} / 5</strong></RatingWrapper>;

export default Rating;