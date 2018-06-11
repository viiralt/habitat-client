import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons';
import { Nunito } from '../styles/fonts';

const BoxButton = props => (
  <TouchableOpacity onPress={props.createListingHandler}>
    <Item>
      <Icon name="ios-add-outline" size={30} color="#4cd137" />
      <Button>Create a new listing</Button>
    </Item>
  </TouchableOpacity>
);

const TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #ffffff;
  width: 100%;
`;

const Item = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10;
  border: 2px;
  border-radius: 4px;
  border-color: #f5f6fa;
  width: 340px;
  height: 40px;
  margin-top: 40px;
`;

const Button = styled.Text`
  color: rgb(72, 72, 72);
  font-family: Nunito;
  font-size: 14px;
  margin-left: 10px;
`;

export default BoxButton;
