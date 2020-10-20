import { useState } from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Navigation from 'components/molecules/Navigation';

import MenuIcon from '../../public/icons/menu-button.svg';
import UserIcon from '../../public/icons/user.svg';
import AddIcon from '../../public/icons/add-button.svg';


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
        <ButtonIcon 
          flat
          icon={<MenuIcon onClick={() => setOpen(!open)} />}
        />
        <h1>Logo</h1>
        <div>
          <ButtonIcon flat icon={<UserIcon />} />
          <ButtonIcon fill="#ffffff" flat circle colors={['#43A047', '#FFEB3B']} icon={<AddIcon />} />
        </div>
      </Container>
        <Navigation open={open} setOpen={setOpen} />
    </Wrapper>
  )
};

export default Header;
