import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import SearchWrapper from './SearchWrapper';
import SearchContainer from './SearchContainer';
import TextInput from './TextInput';

export default class SearchBar extends Component {
  render() {
    return (
      <SearchWrapper>
        <SearchContainer>
          <Icon name="ios-search-outline" size={20} />
          <TextInput placeholder="enter location" />
        </SearchContainer>
      </SearchWrapper>
    );
  }
}
