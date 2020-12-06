import { useState, useEffect } from 'react';
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

import { useUser } from 'utils/useUser';

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Hero = styled.header`
  width: 100%;
  height: 40vh;
  padding-top: 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 11px 10px -10px rgba(0,0,0,.5);
  background: linear-gradient(#00c6ff, #0072ff);

  * {
    color: ${({ theme }) => theme.white};
  }

  @media (min-width: 992px) {
    padding-top: 50px;
    height: 50vh;
  }
`;

const Heading = styled.div`
  width: 100%;
  max-width: 400px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  text-align: center;

  h2 {
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Switches = styled.div`
  width: 100%;
  max-width: 600px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(min-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const SwitchButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 10px 0;
  background-color: transparent;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.s};
  border-bottom: 2px solid transparent;
  
  ${({ selected }) =>
    selected &&
    css`
      font-weight: ${({ theme }) => theme.bold};
      border-bottom: 4px solid ${({ theme }) => theme.white};
    `}

  @media(min-width: 768px) {
    padding: 10px 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const Form = styled.form`
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  background-color: ${({ theme }) => theme.white};

  p {
    padding-top: 20px;
  }
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
    <Wrapper>
      <Hero>
        <Heading>
          <Avatar big>
            <img src="/ArturMucha.jpg" />
          </Avatar>
          <Typography as="h2">{data.username}</Typography>
          <Paragraph>Kraków</Paragraph>
        </Heading>
        <Switches>
          <SwitchButton title="Spersonalizuj swoje ustawienia" selected={selected === 'settings'} onClick={() => setSelected('settings')}>Ustawienia</SwitchButton>
          <SwitchButton title="Stwórz swoją indywidualną listę gier, w które chcesz zagrać" selected={selected === 'wishlist'} onClick={() => setSelected('wishlist')}>Chcę zagrać</SwitchButton>
          <SwitchButton title="Dodaj gry, które posiadasz" selected={selected === 'gamelist'} onClick={() => setSelected('gamelist')}>Moje gry</SwitchButton>
        </Switches> 
      </Hero>
      <Container>
      {selected === 'settings' && 
        (
          <>
          <Typography as="h3" space>Ustawienia</Typography>
            <Form id="update" action="/api/users" method="POST" onSubmit={handleUpdate}>
              <Paragraph>
                Zmień login*
              </Paragraph>
              <Input type="text" name="name" value={data.username} onChange={handleChange} required />
              <Paragraph>
                Zmień email*
              </Paragraph>
              <Input type="email" name="email" value={data.email} onChange={handleChange} required />
              <Paragraph>
                Zmień hasło*
              </Paragraph>
              <Input type="password" name="password" value={data.password} onChange={handleChange} />
              <Button type="submit" colors={['#0072ff', '#00c6ff']} space center>Zapisz</Button>
            </Form>
            <Logout color={'#F50057'} onClick={ () => logout() }>Wyloguj</Logout>
          </>
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
      </Container>
    </Wrapper>
  )

};

export default Profile;
