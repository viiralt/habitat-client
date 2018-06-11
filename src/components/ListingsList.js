import React, { Component } from 'react';
import styled from 'styled-components';

import ListItem from '../components/ListItem';

class ListingsList extends Component {
  itemSelectedHandler = listingId => {
    this.props.navigator.push({
      screen: 'habitat-client.ListingDetailScreen',
      title: 'ListingDetailScreen',
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
    return (
      <ScrollView>
        <List>{this.renderListings()}</List>
      </ScrollView>
    );
  }
}

const List = styled.View`
  padding: 0;
  margin: 0;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const ScrollView = styled.ScrollView``;

export default ListingsList;
