import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OrderingOptionList from '../molecules/OrderingOptionList';

const OrderingOptions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Ordering Options:</Text>
      <OrderingOptionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 4,
    paddingHorizontal: 18,
    marginTop: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderingOptions;