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
    return (
      <MegaWrapper>
        <ListingsList listings={this.props.listings} />
      </MegaWrapper>
    );
  }
}

const HeaderWrapper = styled.View`
  display: flex;
  flex: 1;
  align-self: center;
`;

const ListWrapper = styled.View`
  flex: 1;
  align-self: center;
`;

const MegaWrapper = styled.View`
  flex: 1;
  align-self: center;
`;

const StyledText = styled.Text`
  font-weight: bold;
`;

const mapStateToProps = state => ({
  listings: state.listings.listings,
});

const mapDispatchToProps = dispatch => ({
  onLoadListings: () => dispatch(getListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
