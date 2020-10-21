import { useState } from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Navigation from 'components/molecules/Navigation';
import Badge from 'components/atoms/Badge';
import Typography from 'components/atoms/Typography';

import MenuIcon from '../../public/icons/menu-button.svg';
import UserIcon from '../../public/icons/user.svg';
import AddIcon from '../../public/icons/add-button.svg';
import FavoriteIcon from '../../public/icons/favorite-outline.svg';


const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Container flex spaceBetween alignCenter>
        <div>
        <ButtonIcon flat>
          <MenuIcon onClick={() => setOpen(!open)} />
        </ButtonIcon>
        <Typography as="h1">Logo</Typography>
        </div>
        <div>
          <ButtonIcon flat>
            <Badge circle color="#F50057">0</Badge>
            <FavoriteIcon />
          </ButtonIcon>
          <ButtonIcon flat>
            <Badge circle color="#F50057">0</Badge>
            <UserIcon />
          </ButtonIcon>
          <ButtonIcon flat fill="#0072ff">
            <AddIcon />
          </ButtonIcon>
        </div>
      </Container>
        <Navigation open={open} setOpen={setOpen} />
    </Wrapper>
  )
};

export default Header;
