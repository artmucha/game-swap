import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';

import { useUser } from 'utils/useUser';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Card from 'components/organisms/Card';
import Typography from 'components/atoms/Typography';
import Pagination from 'components/molecules/Pagination';
import PageLoader from 'components/molecules/PageLoader';

const Wishlist = () => {
	const { user } = useUser();
	const [loading, setLoading] = useState(false);
	const [games, setGames] = useState([]);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", stopLoading)
    return () => {
      Router.events.off("routeChangeStart", startLoading)
      Router.events.off("routeChangeComplete", stopLoading)
    }
	}, []);

	useEffect(() => {
		if(!user) return;
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/users/${user.uid}/wishlist`);
				const { data } = await res.json();
				setGames(data);
      } catch(error) {
        console.log(error);
      }
		};
		
		fetchData();
    
  }, [user, games]);

  return (
    <Layout>
    { loading && <PageLoader /> }
      <Container>
        <Typography as="h1" space big>Chcę zagrać</Typography>
      </Container>

			{games.length === 0 ? (
				<>
				<Container flex alignCenter>
        	<Typography as="h2" space >Twoja lista jest pusta :( </Typography>
				</Container>
				<Container flex alignCenter>
					<Typography as="h2" space small>Dodaj gry do listy</Typography>
				</Container>
			</>
			) : (
			<Container flex flexStart>
        <Grid s={2} m={3} l={4}>
          {games.map(game =><Card key={game._id} {...game} />)}
        </Grid>
      </Container>
			)}
    </Layout>
  );
};

export default Wishlist;