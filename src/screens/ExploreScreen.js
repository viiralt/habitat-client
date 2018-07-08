import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';

import Wrapper from '../components/styled/Wrapper';
import MainContainer from '../components/styled/MainContainer';
import HeaderContainer from '../components/styled/HeaderContainer';

export default class ExploreScreen extends Component {
  /* componentDidMount() {
    this.props.onLoadListings();
  } */

  render() {
    return (
      <Wrapper>
        <MainContainer>
          <HeaderContainer>
            <SearchBar />
          </HeaderContainer>
        </MainContainer>
      </Wrapper>
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

/* const SearchContainer = styled.View`
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
`; */

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
