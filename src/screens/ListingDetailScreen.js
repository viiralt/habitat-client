import React from 'react';
import styled from 'styled-components';

const ListingDetailScreen = props => (
  <Container>
    <StyledText>This will be the LISTING DETAIL screen</StyledText>
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

export default ListingDetailScreen;
