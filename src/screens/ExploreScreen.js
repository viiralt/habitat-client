import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ListingsList from '../components/ListingsList';
import SearchBar from '../components/SearchBar';

import { getListings } from '../store/actions/index';
import { Nunito } from '../styles/fonts';

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
        <ListingsContainer>
          <ScrollView>
            <StyledHeader>Explore</StyledHeader>
            <ListingsList listings={this.props.listings} navigator={this.props.navigator} />
          </ScrollView>
        </ListingsContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const SearchContainer = styled.View`
  height: 70;
  width: 100%;
  margin-top: 20;
`;

const ListingsContainer = styled.View``;

const ScrollView = styled.ScrollView``;

const StyledHeader = styled.Text`
  font-size: 26;
  left: 20;
  font-weight: 700;
  font-family: Nunito;
`;

const mapStateToProps = state => ({
  listings: state.listings.listings,
});

const mapDispatchToProps = dispatch => ({
  onLoadListings: () => dispatch(getListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
