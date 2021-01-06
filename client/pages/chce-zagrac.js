import { useState, useEffect } from 'react';

import { useUser } from 'utils/useUser';
import { fetchWishlist, useDispatchWishlist, useWishlist } from 'Providers/WishlistProvider';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Card from 'components/organisms/Card';
import Typography from 'components/atoms/Typography';
import Pagination from 'components/molecules/Pagination';

const Wishlist = () => {
	const { user } = useUser();
	const items = useWishlist();
	const dispatch = useDispatchWishlist();

	const [games, setGames] = useState([]);

	useEffect(() => {
		if(!user) return;
		const fetchWishlistData = async(userUID, dispatch) => {
			try {
				await fetchWishlist(userUID, dispatch);
				setGames(items);
			} catch(error) {
				console.log(error)
			}
		} 
		fetchWishlistData(user.uid, dispatch);
	}, [user, games]);

  return (
    <Layout>
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