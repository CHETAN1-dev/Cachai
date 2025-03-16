import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DiscountBaner from '../../assets/images/discount';
export default function Discount({title = 'Availabe discount', width = 360, height = 180,
}) {
  return (
    <View style={styles.discountContainer}>
      <View style={styles.upperorangeLine} />
      <Text style={styles.discountFont}>{title} </Text>
      <View style={styles.distcountBanner }>
        <DiscountBaner width ={width} height={height}/>
      </View>
      <View style={styles.orangeLine} />
    </View>
  );
}
const styles = StyleSheet.create({
  discountContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  discountFont: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    paddingLeft: 8,
    fontFamily: 'BeVietnamPro-Bold.ttf',
  },
  distcountBanner: {
    marginLeft: 10,
    top: 1,
    marginBottom: 1,
  },
  orangeLine: {
    height: 2,
    backgroundColor: '#FFA500',
    borderRadius: 2,
  },
  upperorangeLine: {
    height: 2,
    backgroundColor: '#FFA500',
    marginBottom: 9,
    borderRadius: 2,
  },
});
