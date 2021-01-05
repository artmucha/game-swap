import { useState } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';

import initFirebase from 'utils/initFirebase';
import { setUserCookie } from 'utils/userCookies';
import { mapUserData } from 'utils/mapUserData';

import Layout from 'components/layouts/Layout';
import Container from 'components/atoms/Container';
import Paragraph from 'components/atoms/Paragraph';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Errors from 'components/atoms/Errors';

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;

const FormWrapper = styled.div`
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;

const Switches = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwitchButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  width: 50%;
  padding: 15px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.grey300};
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: transparent;

  ${({ selected }) =>
    selected &&
    css`
      box-shadow: 0 -2px 10px rgba(0, 0, 0, .1);
      background-color: ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.black};
    `}
`;

const Form = styled.form`
  padding:  0 15px 15px 15px;
  background-color: ${({ theme }) => theme.white};

  p {
    padding-top: 20px;
  }
`;

initFirebase();

const Login = () => {
  const router = useRouter();
  const [selected, setSelected] = useState('login');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({
    login:'',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleLogin = async(event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const { user } = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      const userData = await mapUserData(user);
      setUserCookie(userData);
      setSuccess(true);
      router.push('/');
    } catch(error) {
      let message = '';
      if(error.code == 'auth/user-not-found') {
        message = 'Konto o podanym adresie email nie istnieje';
      } else {
        message = 'Hasło nieprawidłowe'
      }
      
      setErrors([message]);
    };
    setSubmitting(false);

  };

  const handleSignup = async(event) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      const { user } = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      const userData = await mapUserData(user);
      setUserCookie(userData);

      const res = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          login: data.login,
          email: data.email,
          uid: userData.uid
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      let response = await res.json();

      if(response.success) {
        setSuccess(true);
        router.push('/profil');
        
      } else {
        setErrors(response.message);
        let currentUser = await firebase.auth().currentUser;
        currentUser.delete();
      }
    } catch(error) {
        let message = 'Istnieje już konto powiązane z tym adresem email.'
        setErrors([message]);
    };
    setSubmitting(false);
  };

  return (
    <Layout>
      <Container flex>
        <Wrapper>

          <Switches>
            <SwitchButton selected={selected === 'login'} onClick={() => setSelected('login')}>Zaloguj się</SwitchButton>
            <SwitchButton selected={selected === 'register'} onClick={() => setSelected('register')}>Zarejestruj się</SwitchButton>
          </Switches>

          {selected === 'login' && (
            <FormWrapper>
              <Form id="login" action="/api/users" onSubmit={handleLogin}>
                <Paragraph>
                  Email*
                </Paragraph>
                <Input type="email" name="email" value={data.email} onChange={handleChange} required />
                <Paragraph>
                  Hasło*
                </Paragraph>
                <Input type="password" name="password" value={data.password} onChange={handleChange} required />
                { errors.length ? <Errors errors={errors} /> : null }
                <Button type="submit" loading={submitting} success={success} colors={['#0072ff', '#00c6ff']} space center> {success ? 'Zalodowano' : 'Zaloguj'}</Button>

              </Form>
            </FormWrapper>
            )
          }
          
          {selected === 'register' && (
            
            <FormWrapper>
              <Form id="register" action="/api/users" method="POST" onSubmit={handleSignup}>
                <Paragraph>
                  Login*
                </Paragraph>
                <Input type="text" name="login" value={data.name} onChange={handleChange} required />
                <Paragraph>
                  Email*
                </Paragraph>
                <Input type="email" name="email" value={data.email} onChange={handleChange} required />
                <Paragraph>
                  Hasło*
                </Paragraph>
                <Input type="password" name="password" value={data.password} onChange={handleChange} required />
                { errors.length ? <Errors errors={errors} /> : null }
                <Button type="submit" loading={submitting} success={success} colors={['#0072ff', '#00c6ff']} space center> {success ? 'Zarejestrowano' : 'Zarejestruj'}</Button>
              </Form>
            </FormWrapper>
            )
          }

        </Wrapper>
      </Container>
    </Layout>
  )
};

export default Login;