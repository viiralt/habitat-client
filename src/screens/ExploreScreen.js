import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ListingsList from '../components/ListingsList';
import ListItem from '../components/ListItem';

import { getListings } from '../store/actions/index';
import { Nunito, Questrial, Quicksand, Raleway } from '../styles/fonts';

class ExploreScreen extends Component {
  componentDidMount() {
    this.props.onLoadListings();
  }

  render() {
    return (
      <Container>
        <StyledHeader>Explore</StyledHeader>
        <ListingsList listings={this.props.listings} navigator={this.props.navigator} />
      </Container>
    );
  }
}
const Container = styled.View``;

const StyledHeader = styled.Text`
  font-size: 34px;
  left: 20px;
  font-weight: bold;
  font-family: Raleway;
  margin-bottom: 10px;
`;

const mapStateToProps = state => ({
  listings: state.listings.listings,
});

const mapDispatchToProps = dispatch => ({
  onLoadListings: () => dispatch(getListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
