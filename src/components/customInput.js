import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import React from 'react';

const WARNA_DISABLE = '#929CAD';

const CustomInput = ({
  control,
  name,
  value,
  placeholder,
  secureTextEntry,
  onChange,
  onBlur,
  rules = {},
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        name={name}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={WARNA_DISABLE}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: WARNA_DISABLE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    color: WARNA_DISABLE,
  },
  input: {
    color: 'black',
  },
});
