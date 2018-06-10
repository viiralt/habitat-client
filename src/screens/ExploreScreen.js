import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ListingsList from '../components/ListingsList';
import SearchBar from '../components/SearchBar';

import { getListings } from '../store/actions/index';
import { Nunito, Questrial, Quicksand, Raleway } from '../styles/fonts';

class ExploreScreen extends Component {
  componentDidMount() {
    this.props.onLoadListings();
  }

  render() {
    return (
      <Container>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
        <StyledHeader>Explore</StyledHeader>
        <ListingsList listings={this.props.listings} navigator={this.props.navigator} />
      </Container>
    );
  }
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const SearchContainer = styled.View`
  height: 120;
  width: 100%;
`;

const StyledHeader = styled.Text`
  font-size: 34;
  left: 20;
  margin-top: 10;
  font-weight: bold;
  font-family: Nunito;
`;

const mapStateToProps = state => ({
  listings: state.listings.listings,
});

const mapDispatchToProps = dispatch => ({
  onLoadListings: () => dispatch(getListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
