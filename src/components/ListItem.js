import React from 'react';
import styled from 'styled-components';

const ListItem = props => (
  <Container>
    <StyledText>{props.listing.photo}</StyledText>
    <StyledText>
      {props.listing.property_type} - {props.listing.size.bedrooms}
      {'bedrooms'}
    </StyledText>
    <StyledText>{props.listing.name}</StyledText>
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 10px;
  text-align: center;
`;

export default ListItem;
