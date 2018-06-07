import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getListings } from '../store/actions/index';

class ExploreScreen extends Component {
  componentDidMount() {
    this.props.onLoadListings();
  }

  render() {
    return (
      <Container>
        <StyledText>Explore</StyledText>
      </Container>
    );
  }
}

const Container = styled.View`
  display: flex;
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
