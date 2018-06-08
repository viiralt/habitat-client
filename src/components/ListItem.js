import React from 'react';
import styled from 'styled-components';

import { Nunito, Questrial, Quicksand, Raleway } from '../styles/fonts';

const ListItem = props => (
  <Container>
    <StyledImage source={require('../../assets/img/2.jpg')} />
    <StyledSlug>
      {props.listing.property_type.toUpperCase()} - {props.listing.size.bedrooms}
      {' bedrooms'}
    </StyledSlug>
    <StyledName>{props.listing.name}</StyledName>
    <StyledPrice>
      {`€`}
      {props.listing.price} {`per month`}
    </StyledPrice>
  </Container>
);

const Container = styled.View`
  max-width: 160px;
  margin: 5px;
  align-content: center;
`;

const StyledImage = styled.Image`
  height: 140px;
  width: 160px;
`;

const StyledSlug = styled.Text`
  font-size: 10px;
  text-align: center;
  font-family: Nunito;
`;

const StyledName = styled.Text`
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  font-family: Raleway;
`;

const StyledPrice = styled.Text`
  font-size: 10px;
  text-align: center;
`;

export default ListItem;
