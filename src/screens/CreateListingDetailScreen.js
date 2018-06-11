import React, { Component } from 'react';
import styled from 'styled-components';

import PriceSlider from '../components/PriceSlider';
import PropertyPicker from '../components/PropertyPicker';

import { Nunito } from '../styles/fonts';

class CreateListingDetailScreen extends Component {
  state = {
    property_type: 'apartment',
    price: 0,
  };

  priceSliderChangeHandler = value => {
    this.setState({ price: value });
  };

  propTypeChangeHandler = value => {
    this.setState({ property_type: value });
  };

  render() {
    return (
      <Container>
        <PriceSlider
          price={this.state.price}
          priceSliderChangeHandler={this.priceSliderChangeHandler}
        />
        <PropertyPicker
          property_type={this.state.property_type}
          propTypeChangeHandler={this.propTypeChangeHandler}
        />
      </Container>
    );
  }
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SmallText = styled.Text`
  font-family: Nunito;
  font-weight: 400;
  font-size: 11px;
`;

export default CreateListingDetailScreen;
