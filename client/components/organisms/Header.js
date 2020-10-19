import { useState } from 'react';
import styled from 'styled-components';

import Container from 'components/atoms/Container';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Navigation from 'components/molecules/Navigation';

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
          circle 
          colors={['transparent', 'transparent']}
          onClick={() => setOpen(!open)}
        >
          <img src='./menu-button.svg' alt="Hamburger menu" />
        </ButtonIcon>
        <h1>Logo</h1>
        <div>
          <ButtonIcon flat circle colors={['transparent', 'transparent']}>
            <img src="./user.svg" alt="Użytkownik" />
          </ButtonIcon>
          <ButtonIcon circle colors={['#43A047', '#FFEB3B']}>
            <img src="./add-button.svg" alt="Dodaj ogłoszenie" />
          </ButtonIcon>
        </div>
      </Container>
        <Navigation open={open} setOpen={setOpen} />
    </Wrapper>
  )
};

export default Header;
