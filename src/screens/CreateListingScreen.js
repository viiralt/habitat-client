import React, { Component } from 'react';
import styled from 'styled-components';

import BoxButton from '../components/BoxButton';

import { Nunito } from '../styles/fonts';

class CreateListingScreen extends Component {
  createListingHandler = () => {
    this.props.navigator.push({
      screen: 'habitat-client.CreateListingDetailScreen',
      passProps: {
        listings: this.props.listings,
      },
    });
  };

  render() {
    return (
      <Container>
        <Header>How would you like to start?</Header>
        <BoxButton createListingHandler={this.createListingHandler} />
      </Container>
    );
  }
}

const Container = styled.View`
  height: 100px;
`;

const Header = styled.Text`
  font-family: Nunito;
  font-weight: 700;
  font-size: 22;
  margin: 20px;
`;

export default CreateListingScreen;
