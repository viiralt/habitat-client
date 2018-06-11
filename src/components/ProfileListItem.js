import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

import { Nunito } from '../styles/fonts';

const ProfileListItem = props => (
  <Item>
    <TouchableOpacity onPress={props.addListingHandler}>
      <ItemText>List your space</ItemText>
      <Icon name="ios-home-outline" size={30} color="#000" />
    </TouchableOpacity>
  </Item>
);

const Item = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
  height: 70px;
  width: 100%;
  border-bottom-width: 2px;
  border-bottom-color: #f5f6fa;
`;

const TouchableOpacity = styled.TouchableOpacity`
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
`;

const ItemText = styled.Text`
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
`;

export default ProfileListItem;
