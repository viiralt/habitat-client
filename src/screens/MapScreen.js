import React, { Component } from 'react';
import styled from 'styled-components';

import Map from '../components/Map';

import { Nunito } from '../styles/fonts';

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
  font-size: 26px;
  font-weight: 700;
  font-family: Nunito;
  margin-bottom: 10px;
`;

const Container = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20;
`;
