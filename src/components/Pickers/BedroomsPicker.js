import React from 'react';
import styled from 'styled-components';

const BedroomsPicker = props => (
  <PickerContainer>
    <SmallText>Value: {props.property_type}</SmallText>
    <Picker selectedValue={props.property_type} onValueChange={props.bedroomsChangeHandler}>
      <Picker.Item label="1" value="1" />
      <Picker.Item label="2" value="2" />
      <Picker.Item label="3" value="3" />
      <Picker.Item label="4" value="5" />
      <Picker.Item label="6+" value="6+" />
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

export default BedroomsPicker;
