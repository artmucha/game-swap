import { useState } from 'react';
import styled, { css } from 'styled-components';

import Container from 'components/atoms/Container';
import Paragraph from 'components/atoms/Paragraph';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

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

const Login = () => {

  const [selected, setSelected] = useState('login');
  const [data, setData] = useState({
    name:'',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const res = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
  };

  return (
    <Container flex>
      <Wrapper>

        <Switches>
          <SwitchButton selected={selected === 'login'} onClick={() => setSelected('login')}>Zaloguj się</SwitchButton>
          <SwitchButton selected={selected === 'register'} onClick={() => setSelected('register')}>Zarejestruj się</SwitchButton>
        </Switches>

        {selected === 'login' && (
          <FormWrapper>
            <Form id="login" onSubmit={handleSubmit}>
              <Paragraph>
                Email*
              </Paragraph>
              <Input type="email" name="email" value={data.email} onChange={handleChange} required />
              <Paragraph>
                Hasło*
              </Paragraph>
              <Input type="password" name="password" value={data.password} onChange={handleChange} required />
              <Button type="submit" colors={['#0072ff', '#00c6ff']} space center>Zaloguj</Button>
            </Form>
          </FormWrapper>
          )
        }
        
        {selected === 'register' && (
          
          <FormWrapper>
            <Form id="register" onSubmit={handleSubmit}>
              <Paragraph>
                Imię/Login*
              </Paragraph>
              <Input type="text" name="name" value={data.name} onChange={handleChange} required />
              <Paragraph>
                Email*
              </Paragraph>
              <Input type="email" name="email" value={data.email} onChange={handleChange} required />
              <Paragraph>
                Hasło*
              </Paragraph>
              <Input type="password" name="password" value={data.password} onChange={handleChange} required />
              <Button type="submit" colors={['#0072ff', '#00c6ff']} space center>Zarejestruj</Button>
            </Form>
          </FormWrapper>
          )
        }

      </Wrapper>
    </Container>
  )
};

export default Login;