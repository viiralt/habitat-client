import React from 'react';
import styled from 'styled-components';

import { Nunito } from '../styles/fonts';

const ListItem = props => (
  <StyledTouchableOpacity onPress={props.itemSelectedHandler}>
    <Item>
      <Image source={require('../../assets/img/3.jpg')} />
      <Slug>
        {props.listing.property_type.toUpperCase()} - {props.listing.size.bedrooms}
        {' bedrooms'}
      </Slug>
      <Name>{props.listing.name}</Name>
      <Price>
        {`€`}
        {props.listing.price} {`per month`}
      </Price>
    </Item>
  </StyledTouchableOpacity>
);

const Item = styled.View`
  max-width: 160px;
  margin: 5px;
  align-content: center;
`;

const Image = styled.Image`
  height: 140px;
  width: 160px;
  border-radius: 2px;
`;

const Slug = styled.Text`
  font-size: 10px;
  text-align: center;
  font-family: Nunito;
`;

const Name = styled.Text`
  font-size: 12px;
  text-align: center;
  font-weight: 700;
  font-family: Nunito;
`;

const Price = styled.Text`
  font-size: 10px;
  text-align: center;
`;

const StyledTouchableOpacity = styled.TouchableOpacity``;

export default ListItem;
