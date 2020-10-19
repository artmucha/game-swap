import styled from 'styled-components';
import Link from 'next/link';

import SearchForm from 'components/molecules/SearchForm';
import menu from 'constans/menu';
import ButtonIcon from 'components/atoms/ButtonIcon';

const NavigationOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 998;
  display: ${({ open }) => open ? 'block' : 'none'};
`;

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background-color: ${({ theme }) => theme.white};
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform .2s linear;
  z-index: 999;
`;

const NavigationList = styled.ul`
overflow-y: auto;

  a,
  span {
    display: block;
    padding: 10px 15px;
    color: ${({ theme }) => theme.black};
    font-weight: ${({ theme }) => theme.bold};
    border-bottom: 1px solid ${({ theme }) => theme.grey200};
  }

  a:hover {
    background-color: ${({ theme }) => theme.grey100};
  }

  li {
    ul {
      a {
        padding: 10px 15px 10px 30px;
        font-weight: ${({ theme }) => theme.regular};
      }
    }
  }
`;

const CloseButton = styled(ButtonIcon)`
  align-self: flex-end;
`;

const Navigation = ({open, setOpen}) => (
  <>
    <NavigationOverlay open={open} onClick={() => setOpen(!open)} />
    <NavigationWrapper open={open} >
      <CloseButton 
        flat 
        circle 
        colors={['transparent', 'transparent']}
        onClick={() => setOpen(!open)}
      >
        <img src='./icons/close-button.svg' alt='Cofnij' />
      </CloseButton>
      <SearchForm />
      <NavigationList>
        {menu.map(({ text, link, sub }) => (
          <li key={text}>
            {link ? (
              <Link href={`/ogloszenia/gry/${link}`}>
                <a>{text}</a>
              </Link>
            ) : (
                <span>{text}</span>
              )}

            {sub ? (
              <ul>
                {sub.map(({ text, link }) => (
                  <li key={text}>
                    <Link href={`/ogloszenia/gry/${link}`}>
                      <a>{text}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </NavigationList>
    </NavigationWrapper>
  </>
);
export default Navigation;
