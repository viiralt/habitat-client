import React from 'react';
import styled from 'styled-components';

import { Nunito } from '../styles/fonts';

const SavedListingsScreen = props => (
  <Container>
    <StyledText>This will be the saved listings screen</StyledText>
  </Container>
);

const Container = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20;
`;

const StyledText = styled.Text`
  font-size: 26px;
  font-weight: 700;
  font-family: Nunito;
  margin-bottom: 10px;
`;

export default SavedListingsScreen;
