import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getListings } from '../store/actions/index';
import ListingsList from '../components/ListingsList';

class ExploreScreen extends Component {
  componentDidMount() {
    this.props.onLoadListings();
  }

  render() {
    return <ListingsList listings={this.props.listings} />;
  }
}

const mapStateToProps = state => ({
  listings: state.listings.listings,
});

const mapDispatchToProps = dispatch => ({
  onLoadListings: () => dispatch(getListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
