import React, { Component } from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components';

export default class Map extends Component {
  render() {
    return (
      <Container>
        <MapView
          style={{ height: 200, width: 400 }}
          region={{
            latitude: 41.3949147,
            longitude: 2.1957668,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </Container>
    );
  }
}

const Container = styled.View`
  align-items: center;
`;
