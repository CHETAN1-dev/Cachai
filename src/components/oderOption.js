import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TakeOutIcon from '../assets/icons/OderingOptionIcon/takeOut';
import DeliveryIcon from '../assets/icons/OderingOptionIcon/delivery';
import DineIcon from '../assets/icons/OderingOptionIcon/dineIn';
import EarlyIcon from '../assets/icons/OderingOptionIcon/early';

const OrderingOptions = () => {
  const options = [
    {id: 1,  icon: <TakeOutIcon width={74} height={70} />},
    {id: 2,  icon: <DeliveryIcon width={74} height={70} />},
    {id: 3,  icon: <DineIcon width={74} height={70} />},
    {id: 4,  icon: <EarlyIcon width={74} height={70} />},
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Ordering Options:</Text>
      <View style={styles.optionsRow}>
        {options.map(option => (
          <TouchableOpacity key={option.id} style={styles.option}
          onPress={()=> console.log(`Option ${option.id} pressed`)}> {option.icon}
            <Text style={styles.optionText}>{option.label}</Text>
         </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 4,
    paddingHorizontal: 18,
    marginTop:1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
});

export default OrderingOptions;
