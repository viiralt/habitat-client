import React, { Component } from 'react';
import styled from 'styled-components';

import PriceSlider from '../components/Sliders/PriceSlider';
import PropertyPicker from '../components/Pickers/PropertyPicker';

import { Nunito } from '../styles/fonts';

class CreateListingDetailScreen extends Component {
  state = {
    price: 0,
    property_type: 'apartment',
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
      {
        label: 'villa',
        value: 'villa',
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
        <Header>Let's start with the basics...</Header>
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
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-left: 20;
`;

const Header = styled.Text`
  font-size: 26;
  font-weight: 700;
  font-family: Nunito;
`;

export default CreateListingDetailScreen;
