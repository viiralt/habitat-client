import React from 'react';
import styled from 'styled-components';

const ConditionPicker = props => (
  <PickerContainer>
    <SmallText>Value: {props.property_type}</SmallText>
    <Picker selectedValue={props.property_type} onValueChange={props.propTypeChangeHandler}>
      <Picker.Item label="Brand new" value="brand new" />
      <Picker.Item label="Good condition" value="good condition" />
      <Picker.Item label="Recently renovated" value="recently renovated" />
      <Picker.Item label="Needs renovation" value="needs renovation" />
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

export default ConditionPicker;
