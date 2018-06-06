import React, { Component } from 'react';
import styled from 'styled-components';

class ExploreScreen extends Component {
  render() {
    return (
      <Container>
        <StyledText>This will be the HOME screen</StyledText>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
  flex: 1;
  align-self: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
`;

export default ExploreScreen;
