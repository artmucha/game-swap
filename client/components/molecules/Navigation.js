import styled from 'styled-components';
import Link from 'next/link';

import menu from 'constans/menu';
import ButtonIcon from 'components/atoms/ButtonIcon';
import NavigationList from 'components/atoms/NavigationList';

import CloseIcon from '../../public/icons/close-button.svg';

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

const CloseButton = styled(ButtonIcon)`
  align-self: flex-end;
`;

const Navigation = ({open, setOpen}) => (
  <>
    <NavigationOverlay open={open} onClick={() => setOpen(!open)} />
    <NavigationWrapper open={open} >
      <CloseButton flat size={16}>
        <CloseIcon onClick={() => setOpen(!open)} />
      </CloseButton>
      <NavigationList>
        {menu.map(({ text, link, sub }) => (
          <li key={text}>
            {link ? (
              <Link href={`/gry/${link}`}>
                <a>{text}</a>
              </Link>
            ) : (
                <span>{text}</span>
              )}

            {sub ? (
              <ul>
                {sub.map(({ text, link }) => (
                  <li key={text}>
                    <Link href={`/gry/${link}`}>
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