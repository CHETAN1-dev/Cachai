import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ordering from '../molecules/Odering';
import TakeOutIcon from '../../assets/icons/OderingOptionIcon/takeOut';
import DeliveryIcon from '../../assets/icons/OderingOptionIcon/delivery';
import DineIcon from '../../assets/icons/OderingOptionIcon/dineIn';
import EarlyIcon from '../../assets/icons/OderingOptionIcon/early';

const options = [
  {id: 1, label: 'Take Out', Icon: TakeOutIcon},
  {id: 2, label: 'Delivery', Icon: DeliveryIcon},
  {id: 3, label: 'Dine In', Icon: DineIcon},
  {id: 4, label: 'Early Access', Icon: EarlyIcon},
];

const OrderingOptionList = () => {
  return (
    <View style={styles.optionsRow}>
      {options.map(option => (
        <Ordering key={option.id} label={option.label} Icon={option.Icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default OrderingOptionList;
