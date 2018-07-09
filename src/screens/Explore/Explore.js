import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../../containers/SearchBar/SearchBar';
import Carousel from '../../containers/Carousel/Carousel';

import VerticalScroll from '../../elements/VerticalScroll';
import ScreenWrapper from '../../elements/ScreenWrapper';
import Section from '../../elements/Section';

export default class Explore extends Component {
  /* componentDidMount() {
    this.props.onLoadListings();
  } */

  render() {
    return (
      <ScreenWrapper>
        <SearchBar />
        <Section>
          <VerticalScroll scrollEventThrottle={16}>
            <Carousel />
          </VerticalScroll>
        </Section>
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
