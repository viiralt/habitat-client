import React, { Component } from 'react';
import styled from 'styled-components';

export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <StyledTextInput />
      </Container>
    );
  }
}

const Container = styled.View`
  height: 70px;
  width: 300px;
  margin: 5px;
`;

const StyledTextInput = styled.TextInput``;
