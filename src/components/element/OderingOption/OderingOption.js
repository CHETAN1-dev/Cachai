import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import OrderingOptionList from './atom/OrderingOptionList';

const OrderingOptions = ({title = 'Ordering Options:'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <OrderingOptionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 18,
    marginTop: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderingOptions;
