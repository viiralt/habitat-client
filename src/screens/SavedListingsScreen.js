import React from 'react';
import styled from 'styled-components';

const SavedListingsScreen = props => (
  <Container>
    <StyledText>This will be the SAVED LISTINGS screen</StyledText>
  </Container>
);

const Container = styled.View`
  display: flex;
  flex: 1;
  align-self: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
`;

export default SavedListingsScreen;
