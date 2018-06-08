import React, { Component } from 'react';
import styled from 'styled-components';

import ListItem from '../components/ListItem';

class ListingsList extends Component {
  renderListings = () =>
    this.props.listings.map(listing => <ListItem listing={listing} key={listing._id} />);

  render() {
    return (
      <ScrollView>
        <Container>{this.renderListings()}</Container>
      </ScrollView>
    );
  }
}

const Container = styled.View`
  padding: 0;
  margin: 0;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const ScrollView = styled.ScrollView``;

export default ListingsList;
