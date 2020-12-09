import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled, {css} from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';

import initFirebase from 'utils/initFirebase';

import Container from 'components/atoms/Container';
import Grid from 'components/atoms/Grid';
import Typography from 'components/atoms/Typography';
import Paragraph from 'components/atoms/Paragraph';
import Avatar from 'components/atoms/Avatar';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

import UserIcon from '../../public/icons/user.svg';
import FavoriteIcon from '../../public/icons/favorite-outline.svg';
import ListIcon from '../../public/icons/list.svg';
import PasswordIcon from '../../public/icons/padlock.svg';
import LogoutIcon from '../../public/icons/logout.svg';

import { useUser } from 'utils/useUser';

const Hero = styled.header`
  width: 100%;
  padding: 30px 0;
  margin-bottom: 10px;
  background: linear-gradient(#00c6ff, #0072ff);

  * {
    color: ${({ theme }) => theme.white};
  }

  @media (min-width: 992px) {
    padding: 50px 0;
    margin-bottom: 15px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 82px auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 10px;

  @media(min-width: 768px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px; 
    margin-top: 15px;
  }
`;

const Tabs = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  background-color: ${({ theme }) => theme.white};

  @media(min-width: 768px) {
    padding-left: 15px;
  }
`;

const Tab = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.xxs};

  svg {
    margin-bottom: 5px;
    fill: ${({ theme }) => theme.grey300};

    ${({ selected }) =>
    selected &&
    css`
      fill: ${({ theme }) => theme.playstation};
  `}
  }

  @media(min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Content = styled.div`
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  background-color: ${({ theme }) => theme.white};

  @media(min-width: 768px) {
    padding: 15px;
  }
`;

const Form = styled.form`
  p {
    padding-top: 20px;
  }
`;

const FileInput = styled.input`
  width: 100%;
`;

const Logout = styled(Paragraph)`
  margin-top: 20px;
  cursor: pointer;
`;

initFirebase();

const Profile = () => {
	const { user, logout } = useUser();
  const [data, setData] = useState({});
  const [selected, setSelected] = useState('settings');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/users/${user.uid}`);
        const userData = await res.json();
        setData(userData.data);
      } catch(error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [user]);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleUpdate = async(event) => {
    event.preventDefault();
  };

  return (
    <>
      <Hero>
        <Container>
          <Typography as="h2" big>Witaj {data.username}!</Typography>
        </Container>
      </Hero>
      <Container>
        <Content>
          <Grid s={3}>
            <Avatar>
              <img src="/ArturMucha.jpg" />
            </Avatar>
          </Grid>
        </Content>
      <Wrapper>
        <Tabs>
          <Tab title="Spersonalizuj swoje ustawienia" selected={selected === 'settings'} onClick={() => setSelected('settings')}>
            <UserIcon />
            Konto
          </Tab>
          <Tab title="Stwórz swoją indywidualną listę gier, w które chcesz zagrać" selected={selected === 'wishlist'} onClick={() => setSelected('wishlist')}>
            <FavoriteIcon />
            Chcę zagrać
          </Tab>
          <Tab title="Dodaj gry, które posiadasz" selected={selected === 'gamelist'} onClick={() => setSelected('gamelist')}>
            <ListIcon />
            Moje gry
          </Tab>
          <Tab title="Zmień hasło" selected={selected === 'password'} onClick={() => setSelected('password')}>
            <PasswordIcon />
            Resetuj hasło
          </Tab>
          <Tab title="Wyloguj" selected={selected === 'logout'} onClick={() => logout()}>
            <LogoutIcon />
            Wyloguj
          </Tab>
        </Tabs>
        <Content>
        {selected === 'settings' && 
          (
            <Form id="update" action="/api/users" method="POST" onSubmit={handleUpdate}>
              <Paragraph>
                Avatar
              </Paragraph>
              <FileInput type="file" name="file" value={data.avatar} onChange={handleChange} />
              <Paragraph>
                Login
              </Paragraph>
              <Input type="text" name="name" value={data.username} onChange={handleChange} required />
              <Paragraph>
                Zmień email*
              </Paragraph>
              <Input type="email" name="email" value={data.email} onChange={handleChange} required />
              <Button type="submit" colors={['#0072ff', '#00c6ff']} space center>Zapisz</Button>
            </Form>
          )
        }
        {selected === 'wishlist' && 
          (
            <Typography as="h3" space>Chcę zagrać w:</Typography>

          )
        }
        {selected === 'gamelist' && 
          (
            <Typography as="h3" space>Gry, które mam:</Typography>
          )
        }
        {selected === 'password' && 
          (
            <Typography as="h3" space>Gry, które mam:</Typography>
          )
        }
        </Content> 
        </Wrapper>
      </Container>
    </>
  )

};

export default dynamic(() => Promise.resolve(Profile), {
  ssr: false
});