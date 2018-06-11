import React from 'react';
import styled from 'styled-components';

import { Nunito } from '../styles/fonts';

const ListItem = props => (
  <StyledTouchableOpacity onPress={props.itemSelectedHandler}>
    <Item>
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
    </Item>
  </StyledTouchableOpacity>
);

const Item = styled.View`
  max-width: 160px;
  margin: 5px;
  align-content: center;
`;

const StyledImage = styled.Image`
  height: 140px;
  width: 160px;
  border-radius: 2px;
`;

const StyledSlug = styled.Text`
  font-size: 10px;
  text-align: center;
  font-family: Nunito;
`;

const StyledName = styled.Text`
  font-size: 12px;
  text-align: center;
  font-weight: 700;
  font-family: Nunito;
`;

const StyledPrice = styled.Text`
  font-size: 10px;
  text-align: center;
`;

const StyledTouchableOpacity = styled.TouchableOpacity``;

export default ListItem;
