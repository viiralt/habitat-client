import React from 'react';
import styled from 'styled-components';

import { Nunito, Questrial, Quicksand, Raleway } from '../styles/fonts';

const LoginForm = props => (
  <Container behavior="padding">
    <StatusBar barStyle="light-content" />
    <Logo>
      <Image source={require('../../assets/logo/logo1.jpg')} />
      <LogoText>habitat</LogoText>
    </Logo>
    <Form>
      <TextInput
        placeholder="username or email"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder="password"
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        secureTextEntry
        returnKeyType="go"
      />
      <TouchableOpacity onPress={props.loginHandler}>
        <Login>LOGIN</Login>
      </TouchableOpacity>
    </Form>
  </Container>
);

const StatusBar = styled.StatusBar``;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #7ed56f;
`;

const Logo = styled.View`
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

const Image = styled.Image`
  width: 200;
  height: 200;
`;

const LogoText = styled.Text`
  font-weight: 400;
  font-family: Quicksand;
  font-size: 24px;
  text-align: center;
  opacity: 0.9;
  color: #fff;
`;

const Form = styled.View`
  padding: 20px;
`;

const TextInput = styled.TextInput`
  height: 40;
  margin-bottom: 10;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding-horizontal: 10;
`;

const TouchableOpacity = styled.TouchableOpacity`
  padding-vertical: 15;
  background-color: #55c57a;
`;

const Login = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: 700;
`;

export default LoginForm;
