import React from 'react';
import {View, StyleSheet} from 'react-native';
import OrderingOption from '../atoms/OderingOption';

const options = [
  {id: 1, label: 'Take Out'},
  {id: 2, label: 'Delivery'},
  {id: 3, label: 'Dine In'},
  {id: 4, label: 'Early Access'},
];

const OrderingOptionList = () => {
  return (
    <View style={styles.optionsRow}>
      {options.map(option => (
        <OrderingOption key={option.id} label={option.label} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

export default OrderingOptionList;
