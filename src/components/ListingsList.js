import React, { Component } from 'react';
import styled from 'styled-components';

import ListItem from '../components/ListItem';

class ListingsList extends Component {
  renderListings = () =>
    this.props.listings.map(listing => <ListItem listing={listing} key={listing._id} />);

  render() {
    return <Container>{this.renderListings()}</Container>;
  }
}

const Container = styled.View`
  display: flex;
  flex: 1;
  align-self: center;
`;

const StyledText = styled.Text`
  font-size: 16px;
`;

export default ListingsList;
