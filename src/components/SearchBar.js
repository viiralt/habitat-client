import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchBar extends Component {
  render() {
    return (
      <Wrapper>
        <SearchContainer>
          <Icon name="ios-search-outline" size={20} />
          <TextInput placeholder="enter location" />
        </SearchContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  height: 80px;
  margin-bottom: 20px;
  border-bottom-width: 1;
  background-color: #ffffff;
  border-bottom-color: #dddddd;
`;

const SearchContainer = styled.View`
  height: 40;
  padding: 10px;
  shadow-offset: 0;
  shadow-color: #000;
  flex-direction: row;
  shadow-opacity: 0.2;
  margin-bottom: 20px;
  margin-horizontal: 20px;
  background-color: #ffffff;
  border-radius: 4;
`;

const TextInput = styled.TextInput`
  flex: 1;
  color: #767676;
  margin-left: 10px;
  background-color: #ffffff;
`;
