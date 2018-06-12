import React from 'react';
import styled from 'styled-components';

const AreaSlider = props => (
  <SliderContainer>
    <SmallText>Value: {props.area_sqm}</SmallText>
    <Slider
      value={props.area_sqm}
      onValueChange={props.areaSqmChangeHandler}
      minimumTrackTintColor="#4cd137"
      maximumValue={10000}
      step={10}
    />
  </SliderContainer>
);

const SliderContainer = styled.View`
  width: 200px;
  height: 150px;
`;

const Slider = styled.Slider``;

const SmallText = styled.Text`
  font-family: Nunito;
  font-weight: 400;
  font-size: 11px;
`;

export default PriceSlider;
