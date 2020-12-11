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
import TextArea from 'components/atoms/TextArea';
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
  height: 400px;
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
  color: ${({ color, theme }) => color ? color : theme.black};

  svg {
    margin-bottom: 5px;
    fill: ${({ color, theme }) => color ? color : theme.grey300};

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

const FileInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FileInput = styled.input`
  width: 100%;
  outline: 0;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: 'Wybierz zdjęcie';
    outline: 0;
    cursor: pointer;
    padding: 5px;
    border: 0;
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.playstation};
    background: ${({ theme }) => theme.white};
  }
`;

initFirebase();

const Profile = () => {
	const { user, logout } = useUser();
  const [data, setData] = useState({});
  const [password, setPassword] = useState({});
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

  const handleFile = (event) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setData({ ...data, avatar: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleUpdate = async(event) => {
    event.preventDefault();

    try {
      await fetch(`/api/users/${user.uid}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
    } catch(error) {
      console.log(error)
    }
  };

  const handlePassword = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value })
  };

  const handlePasswordUpdate = async(event) => {
    event.preventDefault();
    try {
      if(password.password === password.password_confirm) {
        let user = await firebase.auth().currentUser;
        user.updatePassword(password.password);
      }
    } catch(error) {
      if (error.code === 'auth/requires-recent-login') {
        console.log('Ustawienie nowego hasła wymaga ponownego logowania. Wyloguj i zaloguj się ponownie.');
      }
    }
  };

  const handleUserRemove = async() => {
    try {
      let user = await firebase.auth().currentUser;
      await fetch(`/api/users/${user.uid}`, {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      user.delete();
    } catch(error) {
      console.log(error);
    }
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
              { data && data.avatar ? (
                <img src={data.avatar} alt={data.username} />
              ) : (
                'A'
              ) }
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
          <Tab title="Resetuj hasło" selected={selected === 'password'} onClick={() => setSelected('password')}>
            <PasswordIcon />
            Hasło
          </Tab>
          <Tab title="Wyloguj" color="#F50057" selected={selected === 'logout'} onClick={() => logout()}>
            <LogoutIcon />
            Wyloguj
          </Tab>
        </Tabs>
        <Content>
        {selected === 'settings' && 
          (
            <Form id="update" action="/api/users" method="PUT" onSubmit={handleUpdate}>
              <Paragraph>
                Avatar
              </Paragraph>
              <FileInputWrapper>
                <Avatar>
                  <img src={data.avatar} alt={data.username} />
                </Avatar>
                <FileInput type="file" name="avatar" onChange={handleFile} />
              </FileInputWrapper>
              <Paragraph>
                Login
              </Paragraph>
              <Input type="text" name="name" value={data.username} required disabled />
              <Paragraph>
                Email*
              </Paragraph>
              <Input type="email" name="email" value={data.email} required disabled />
              <Paragraph>
                Miasto
              </Paragraph>
              <Input type="text" name="city" value={data.city} onChange={handleChange} />
              <Paragraph>
                Dodatkowe informacje
              </Paragraph>
              <TextArea 
                rows="4"
                placeholder="napisz kilka słów o sobie" 
                name="description" 
                value={data.description} 
                onChange={handleChange}
              />
              <Button type="submit" colors={['#0072ff', '#00c6ff']} space center>Zapisz</Button>
              <Button type="submit" colors={['#F50057', '#F50057']} space center onClick={handleUserRemove}>Usuń konto</Button>
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
            <Form id="update-password" onSubmit={handlePasswordUpdate}>
              <Paragraph>
                Nowe hasło*
              </Paragraph>
              <Input type="password" name="password" value={password.password} required onChange={handlePassword} />
              <Paragraph>
                Potwierdź hasło*
              </Paragraph>
              <Input type="password" name="password_confirm" value={password.password_confirm} required onChange={handlePassword} />
              <Button type="submit" colors={['#0072ff', '#00c6ff']} space center>Zapisz</Button>
            </Form>
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