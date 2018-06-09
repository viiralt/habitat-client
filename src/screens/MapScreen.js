import React, { Component } from 'react';
import styled from 'styled-components';

import Map from '../components/Map';

export default class MapScreen extends Component {
  render() {
    return (
      <Container>
        <StyledHeader>Map</StyledHeader>
        <Map />
      </Container>
    );
  }
}

const StyledHeader = styled.Text`
  font-size: 34px;
  font-weight: bold;
  font-family: Raleway;
  margin-bottom: 10px;
`;

const Container = styled.View``;
