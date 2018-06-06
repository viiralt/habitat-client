import React from 'react';
import styled from 'styled-components';

const ProfileScreen = props => (
  <Container>
    <StyledText>This will be the USER PROFILE screen</StyledText>
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

export default ProfileScreen;
