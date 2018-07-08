import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../../containers/SearchBar/SearchBar';
import Carousel from '../../containers/Carousel/Carousel';

import ScreenWrapper from '../../elements/ScreenWrapper';
import VerticalScroll from '../../elements/VerticalScroll';
import Container from '../../elements/Container';

export default class Explore extends Component {
  /* componentDidMount() {
    this.props.onLoadListings();
  } */

  render() {
    return (
      <ScreenWrapper>
        <Container>
          <SearchBar />
          <Container>
            <VerticalScroll scrollEventThrottle={16}>
              <Carousel />
            </VerticalScroll>
          </Container>
        </Container>
      </ScreenWrapper>
    );
  }
}

/* const mapStateToProps = state => ({
  listings: state.listings.listings,
});

const mapDispatchToProps = dispatch => ({
  onLoadListings: () => dispatch(getListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen); */

/* render() {
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
} */
