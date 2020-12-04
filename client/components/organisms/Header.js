import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Container from 'components/atoms/Container';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Navigation from 'components/molecules/Navigation';
import Badge from 'components/atoms/Badge';

import Logo from '../../public/icons/uzywki_logo.svg';

import MenuIcon from '../../public/icons/menu-button.svg';
import UserIcon from '../../public/icons/user.svg';
import AddIcon from '../../public/icons/add-button.svg';
import FavoriteIcon from '../../public/icons/favorite-outline.svg';

const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  margin-bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 11px 10px -10px rgba(0,0,0,.1);
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Container flex spaceBetween alignCenter>
        <MenuIcon onClick={() => setOpen(!open)} />
        <Link href="/">
          <a><Logo /></a>
        </Link>
        <div>
          <ButtonIcon flat>
            <Badge circle color="#F50057">0</Badge>
            <FavoriteIcon />
          </ButtonIcon>
          <Link href="/login">
            <a>
            <ButtonIcon flat>
              <Badge circle color="#F50057">0</Badge>
              <UserIcon />
            </ButtonIcon>
            </a>
          </Link>
          <Link href="/gry/dodaj">
            <a>
              <ButtonIcon flat fill="#0072ff">
                <AddIcon />
              </ButtonIcon>
            </a>
          </Link>
        </div>
      </Container>
        <Navigation open={open} setOpen={setOpen} />
    </Wrapper>
  )
};

export default Header;
