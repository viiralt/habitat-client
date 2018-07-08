import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import SearchContainer from './styled/SearchContainer';
import TextInput from './styled/TextInput';

export default class SearchBar extends Component {
  render() {
    return (
      <SearchContainer>
        <Icon name="ios-search-outline" size={20} />
        <TextInput placeholder="enter location" />
      </SearchContainer>
    );
  }
}
