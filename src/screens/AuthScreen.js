import React, { Component } from 'react';
import styled from 'styled-components';

import StartMainTabs from '../screens/startMainTabs';

import LoginForm from '../components/LoginForm';

export default class AuthScreen extends Component {
  loginHandler = () => {
    StartMainTabs();
  };

  render() {
    return <LoginForm loginHandler={this.loginHandler} />;
  }
}
