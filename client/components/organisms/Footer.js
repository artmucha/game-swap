import styled from 'styled-components';
import Link from 'next/link';

import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Paragraph from 'components/atoms/Paragraph';
import menu from 'constans/menu';
import Logo from '../../public/icons/uzywki_logo.svg';

const Wrapper = styled.footer`
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.grey300};
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.black};
  text-align: center;

  @media(min-width: 768px) {
    margin-top: 40px;
    text-align: left;
  }
`;

const NavigationList = styled.ul`

  a {
    display: inline-block;
    color: inherit;
  }

  a:hover {
    color: ${({ theme }) => theme.white};
  }
`;

const NavigationHeading = styled.h4`
    margin-bottom: 10px;
    text-transform: uppercase;
    line-height: 1.7;
    font-weight: ${({ theme }) => theme.regular};
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.white};
`;

const Copyright = styled.p`
  padding-top: 20px;
  text-align: center;

  a {
    color: inherit;
  }
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <Grid s={1} m={3} l={4}>
      <div>
      <Link href="/">
        <a><Logo /></a>
      </Link>
      <Paragraph color="#B3B3B3">
        Używki to darmowy serwis służący do legalnej wymiany gier na konsole oraz PC.
        Załóż konto i ciesz się najlepszymi grami w cenie wysyłki!
      </Paragraph>
      </div>
      <NavigationList>
        <NavigationHeading>Wymieniaj</NavigationHeading>
        {menu.map(({ text, link, maker, sub }) => (
          <li key={text}>
              {link ? (
              <Link href={`/gry/${maker}/${link}`}>
                  <a>Gry na {text}</a>
              </Link>
              ) : null }

              {sub ? (
              <ul>
                  {sub.map(({ text, link, maker }) => (
                  <li key={text}>
                      <Link href={`/gry/${maker}/${link}`}>
                      <a>Gry na {text}</a>
                      </Link>
                  </li>
                  ))}
              </ul>
              ) : null}
          </li>
        ))}
      </NavigationList>
      <NavigationList>
        <NavigationHeading>Używki</NavigationHeading>
        <li>
          <Link href="/o-nas">
            <a>O nas</a>
          </Link>
        </li>
        <li>
          <Link href="/regulamin">
            <a>Regulamin</a>
          </Link>
        </li>
        <li>
          <Link href="/polityka-prywatnosci">
            <a>Polityka prywatności</a>
          </Link>
        </li>
        <li>
          <Link href="/kontakt">
            <a>Kontakt</a>
          </Link>
        </li>
      </NavigationList>
      </Grid>
    </Container>
    <Container>
      <Copyright>
        Copyright © {new Date().getFullYear()} <Link href="https://game-swapper.pl"><a>Używki</a></Link> - Wszystkie prawa zastrzeżone.
      </Copyright>
    </Container>
  </Wrapper>
);

export default Footer;
