import React, { Component } from 'react';
import styled from 'styled-components';

import StartMainTabs from '../screens/startMainTabs';

export default class AuthScreen extends Component {
  loginHandler = () => {
    StartMainTabs();
  };

  render() {
    return (
      <StyledView>
        <StyledText>Booom, AuthScreen!</StyledText>
        <StyledButton title="Login" onPress={this.loginHandler} />
      </StyledView>
    );
  }
}

const StyledButton = styled.Button``;
const StyledText = styled.Text``;
const StyledView = styled.View``;
