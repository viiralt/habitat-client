import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons';
import { Nunito } from '../styles/fonts';

export default class SearchBar extends Component {
  render() {
    return (
      <Container behavior="padding">
        <SearchBox>
          <Icon name="ios-search-outline" size={20} color="#767676" />
          <TextInput placeholder="enter location" placeholderTextColor="#767676" paddingLeft={10} />
        </SearchBox>
      </Container>
    );
  }
}

const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #ffffff;
`;

const SearchBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10;
  border: 2px;
  border-radius: 4px;
  border-color: #f5f6fa;
  height: 45;
`;

const TextInput = styled.TextInput`
  width: 83%;
  color: rgb(72, 72, 72);
  font-family: Nunito;
`;
