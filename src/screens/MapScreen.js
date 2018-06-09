import React, { Component } from 'react';
import styled from 'styled-components';

import Map from '../components/Map';

export default class MapScreen extends Component {
  render() {
    return (
      <Container>
        <Map />
      </Container>
    );
  }
}

const Container = styled.View``;
