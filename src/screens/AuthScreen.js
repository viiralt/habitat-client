import React, { Component } from 'react';
import styled from 'styled-components';

import ListingsCard from '../components/ListingsCard';
import StartMainTabs from '../screens/startMainTabs';

export default class AuthScreen extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>Booom, AuthScreen!</StyledText>
        <StyledButton title="Login" />
      </StyledView>
    );
  }
}

const StyledButton = styled.Button``;
const StyledText = styled.Text``;
const StyledView = styled.View``;
