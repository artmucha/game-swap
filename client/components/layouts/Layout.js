import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import { useUser } from 'utils/useUser';
import { useWishlist } from "Providers/WishlistProvider";

import PageLoader from 'components/molecules/PageLoader';
import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Paragraph from 'components/atoms/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Navigation from 'components/molecules/Navigation';
import Badge from 'components/atoms/Badge';

import Logo from '../../public/icons/uzywki_logo.svg';
import MenuIcon from '../../public/icons/menu-button.svg';
import UserIcon from '../../public/icons/user.svg';
import AddIcon from '../../public/icons/add-button.svg';
import FavoriteIcon from '../../public/icons/favorite-outline.svg';

import menu from 'constans/menu';

const Header = styled.header`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 11px 10px -10px rgba(0,0,0,.1);
`;

const Footer = styled.footer`
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

const Layout = ({ children, title = 'Używki'}) => {
	const { user } = useUser();
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	
	const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
		Router.events.on("routeChangeStart", () => { 
			setOpen(false);
			startLoading();
		});
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", () => {
				setOpen(false);
				startLoading();
			});
			Router.events.off("routeChangeComplete", stopLoading);
    }
	}, []);

	const items = useWishlist();
	
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap' rel='stylesheet'/>
      </Head>
			{ loading && <PageLoader /> }
			<Header>
				<Container flex spaceBetween alignCenter>
					<MenuIcon onClick={() => setOpen(!open)} />
					<Link href="/">
						<a><Logo /></a>
					</Link>
					<div>
						{!user ? (
							<Link href="/login">
								<a>
								<ButtonIcon flat>
									<Badge circle color="#F50057">0</Badge>
									<UserIcon />
								</ButtonIcon>
								</a>
							</Link>
						) : (
							<>
							<Link href="/chce-zagrac">
								<a>
									<ButtonIcon flat>
										<Badge circle color="#F50057">{items.length}</Badge>
										<FavoriteIcon />
									</ButtonIcon>
								</a>
							</Link>
							<Link href="/profil">
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
							</>
						)}
					</div>
				</Container>
				<Navigation open={open} setOpen={setOpen} />
			</Header>

			{children}
			
			<Footer>
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
			</Footer>
    </>
  )
}

export default Layout;