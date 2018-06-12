import React, { Component } from 'react';
import styled from 'styled-components';

import ListItem from '../components/ListItem';

class ListingsList extends Component {
  itemSelectedHandler = listingId => {
    this.props.navigator.push({
      screen: 'habitat-client.ListingDetailScreen',
      navigatorStyle: {
        navBarHidden: true,
      },
      passProps: {
        listingId,
      },
    });
  };

  renderListings = () =>
    this.props.listings.map(listing => (
      <ListItem
        listing={listing}
        key={listing._id}
        itemSelectedHandler={() => this.itemSelectedHandler(listing._id)}
      />
    ));

  render() {
    return <List>{this.renderListings()}</List>;
  }
}

const List = styled.View`
  padding: 0;
  margin: 0;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export default ListingsList;
