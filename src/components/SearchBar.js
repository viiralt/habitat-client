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
  flex-direction: row;
  padding: 10px;
  height: 40;
  margin-horizontal: 30px;
  background-color: #ffffff;
  shadow-offset: 0;
  shadow-color: #000;
  shadow-opacity: 0.2;
`;

const SearchContainer = styled.View`
  height: 80px;
  border-bottom-width: 1;
  background-color: #ffffff;
  margin-bottom: 20px;
  border-bottom-color: #dddddd;
`;

const TextInput = styled.TextInput`
  flex: 1;
  color: #767676;
  margin-left: 10px;
  background-color: #ffffff;
`;
