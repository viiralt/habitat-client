import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { Nunito } from '../../styles/fonts';

// TODO Change the icon

const PropertyPicker = props => (
  <View style={styles.container}>
    <Text>proptype: {props.property_type}</Text>
    <RNPickerSelect
      hideIcon="true"
      value={props.property_type}
      onValueChange={props.propertyTypeChangeHandler}
      style={{ ...pickerSelectStyles }}
      items={props.items}
      placeholder={{
        label: 'Choose property type',
        value: null,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#f5f6fa',
    borderRadius: 4,
    backgroundColor: '#fff',
    color: 'black',
    fontFamily: 'Nunito',
    padding: 10,
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
