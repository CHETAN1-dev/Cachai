import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StoreIcon from '../assets/icons/ExtraDetailIcon/store';
import DogIcon from '../assets/icons/ExtraDetailIcon/pet';
import CamageIcon from '../assets/icons/ExtraDetailIcon/family';
import CarIcon from '../assets/icons/ExtraDetailIcon/car';
import TShirtIcon from '../assets/icons/ExtraDetailIcon/attire';
import LampIcon from '../assets/icons/ExtraDetailIcon/ambience';

const ExtraDetails = () => {
  const details = [
    {label: 'Curbside Pickup', value: 'Yes', icon: <StoreIcon />},
    {label: 'Parking', value: 'Private Lot', icon: <CarIcon />},
    {label: 'Attire', value: 'Casual Dress', icon: <TShirtIcon />},
    {label: 'Ambience', value: 'Casual', icon: <LampIcon />},
    {label: 'Family Friendly', value: 'Yes', icon: <CamageIcon />},
    {label: 'Pet Friendly', value: 'No', icon: <DogIcon />},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Extra Details:</Text>
      {details.map((detail, index) => (
        <View key={index} style={styles.detailRow}>
          <View style={styles.iconWrapper}>{detail.icon}</View>
          <Text style={styles.label}>{detail.label}</Text>
          <Text style={styles.value}>{detail.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: -7,
    elevation: 2,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    top:1,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
    fontWeight:'bold',
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  value: {
    fontSize: 15,
    color: 'orange',
    fontWeight:'800',
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
});

export default ExtraDetails;
