import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ListItem from '../components/ListItem';
import ListingsList from '../components/ListingsList';

class ListingDetailScreen extends Component {
  render() {
    return <Text>{this.props.listing.name}</Text>;
  }
}

const Text = styled.Text``;

const mapStateToProps = (state, ownProps) => ({
  // listing: state.listings.listings,
  listing: state.listings.listings.find(listing => listing._id === ownProps.listingId),
});

export default connect(mapStateToProps)(ListingDetailScreen);
