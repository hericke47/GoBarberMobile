import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';
import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Input />
      <Input />

      <Title>Faça seu logon</Title>
      <Button onPress={() => {}}>Entrar</Button>

    </Container>
  )
}

export default SignIn;
