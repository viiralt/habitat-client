import React, { Component } from 'react';
import styled from 'styled-components';

import PriceSlider from '../components/Sliders/PriceSlider';
import PropertyPicker from '../components/Pickers/PropertyPicker';

import { Nunito } from '../styles/fonts';

class CreateListingDetailScreen extends Component {
  state = {
    property_type: 'apartment',
    price: 0,
  };

  priceChangeHandler = value => {
    this.setState({ price: value });
  };

  propertyTypeChangeHandler = value => {
    this.setState({ property_type: value });
  };
  /* 
  bedroomsChangeHandler = value => {
    this.setState({ bedrooms: value });
  };

  bathroomsChangeHandler = value => {
    this.setState({ bathrooms: value });
  };

  areaSqmChangeHandler = value => {
    this.setState({ area_sqm: value });
  }; */

  render() {
    return (
      <Container>
        <PriceSlider price={this.state.price} priceChangeHandler={this.priceChangeHandler} />
        <PropertyPicker
          property_type={this.state.property_type}
          propertyTypeChangeHandler={this.propertyTypeChangeHandler}
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
