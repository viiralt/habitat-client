import React, { Component } from 'react';

import List from './styled/List';

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

export default ListingsList;
