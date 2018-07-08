import React from 'react';
import styled from 'styled-components';

const PriceSlider = props => (
  <SliderContainer>
    <Text>Monthly rental price: €{props.price}</Text>
    <Slider
      value={props.price}
      onValueChange={props.priceChangeHandler}
      minimumTrackTintColor="#4cd137"
      maximumValue={10000}
      step={10}
    />
  </SliderContainer>
);

const SliderContainer = styled.View`
  width: 250px;
  height: 150px;
  margin-top: 30px;
`;

const Slider = styled.Slider``;

const Text = styled.Text`
  font-family: Nunito;
  font-weight: 400;
  font-size: 14px;
`;

export default PriceSlider;
