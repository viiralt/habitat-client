import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components';

import { Nunito } from '../../styles/fonts';

// TODO Change the icon

const PropertyPicker = props => (
  <View style={styles.container}>
    <Text>Choose a property type</Text>
    <RNPickerSelect
      hideIcon
      value={props.property_type}
      onValueChange={props.propertyTypeChangeHandler}
      style={{ ...pickerSelectStyles }}
      items={props.items}
      placeholder={{
        label: 'Select one',
        value: null,
      }}
    />
  </View>
);

const Text = styled.Text`
  font-family: Nunito;
  font-size: 12;
  font-weight: 400;
  margin-bottom: 5px;
`;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    borderWidth: 2,
    borderColor: '#f5f6fa',
    borderRadius: 4,
    backgroundColor: '#fff',
    color: 'black',
    fontFamily: 'Nunito',
    padding: 5,
  },
  modalViewTop: {
    backgroundColor: '#fff',
  },
  modalViewMiddle: {
    backgroundColor: '#fff',
  },
  modalViewBottom: {
    backgroundColor: '#fff',
  },
  icon: {},
  done: {
    color: '#4cd137',
  },
});

export default PropertyPicker;
