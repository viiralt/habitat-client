import React, { Component } from 'react';
import styled from 'styled-components';

import PriceSlider from '../components/Sliders/PriceSlider';
import PropertyPicker from '../components/Pickers/PropertyPicker';

import { Nunito } from '../styles/fonts';

class CreateListingDetailScreen extends Component {
  state = {
    price: 0,
    property_type: undefined,
    items: [
      {
        label: 'apartment',
        value: 'apartment',
      },
      {
        label: 'house',
        value: 'house',
      },
      {
        label: 'penthouse',
        value: 'penthouse',
      },
    ],
  };

  propertyTypeChangeHandler = value => {
    this.setState({ property_type: value });
  };

  priceChangeHandler = value => {
    this.setState({ price: value });
  };

  render() {
    return (
      <Container>
        <PropertyPicker
          items={this.state.items}
          property_type={this.state.property_type}
          propertyTypeChangeHandler={this.propertyTypeChangeHandler}
        />
        <PriceSlider price={this.state.price} priceChangeHandler={this.priceChangeHandler} />
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
