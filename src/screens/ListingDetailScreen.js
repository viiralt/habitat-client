import React, { Component } from 'react';
import styled from 'styled-components';

import ListItem from '../components/ListItem';

class ListingDetailScreen extends Component {
  render() {
    return (
      <Item>
        <StyledName>{this.props.listings[0].name}</StyledName>
      </Item>
    );
  }
}

const Item = styled.View`
  height: 200px;
  width: 200px;
`;

const StyledName = styled.Text``;

export default ListingDetailScreen;
