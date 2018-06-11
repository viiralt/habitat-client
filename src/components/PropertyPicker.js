import React from 'react';
import styled from 'styled-components';

const PropertyPicker = props => (
  <PickerContainer>
    <SmallText>Value: {props.property_type}</SmallText>
    <Picker value={props.property_type} onValueChange={props.propTypeChangeHandler}>
      <Picker.Item label="Apartment" value="apartment" />
      <Picker.Item label="House" value="house" />
      <Picker.Item label="Penthouse" value="penthouse" />
      <Picker.Item label="Villa" value="villa" />
    </Picker>
  </PickerContainer>
);

const PickerContainer = styled.View`
  position: absolute;
  bottom: 0;
  height: 216px;
  width: 100%;
  background-color: #fafafa;
`;

const Picker = styled.Picker``;

const SmallText = styled.Text`
  font-family: Nunito;
  font-weight: 400;
  font-size: 11px;
  text-align: center;
`;

export default PropertyPicker;
