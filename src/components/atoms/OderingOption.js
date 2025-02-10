import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderingOption = ({ label }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={() => console.log(`${label} pressed`)}>
      <View style={styles.iconPlaceholder} />
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#ddd',
    borderRadius: 30,
  },
  optionText: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default OrderingOption;