import React from 'react';
import {View,StyleSheet} from 'react-native';
import StoreIcon from '../../assets/icons/ExtraDetailIcon/store';
import DogIcon from '../../assets/icons/ExtraDetailIcon/pet';
import CamageIcon from '../../assets/icons/ExtraDetailIcon/family';
import CarIcon from '../../assets/icons/ExtraDetailIcon/car';
import TShirtIcon from '../../assets/icons/ExtraDetailIcon/attire';
import LampIcon from '../../assets/icons/ExtraDetailIcon/ambience';
import {DetailRow} from '../molecule/DetailRow';
import {DetailText} from '../atoms/Detail';

const ExtraDetails = () => {
  const details = [
    {label: 'Curbside Pickup', value: 'Yes', Icon: StoreIcon},
    {label: 'Parking', value: 'Private Lot', Icon: CarIcon},
    {label: 'Attire', value: 'Casual Dress', Icon: TShirtIcon},
    {label: 'Ambience', value: 'Casual', Icon: LampIcon},
    {label: 'Family Friendly', value: 'Yes', Icon: CamageIcon},
    {label: 'Pet Friendly', value: 'No', Icon: DogIcon},
  ];

  return (
    <View style={styles.container}>
      <DetailText style={styles.header}>Extra Details:</DetailText>
      {details.map((detail, index) => (
        <DetailRow key={index} Icon={detail.Icon}>
          <DetailText style={styles.label}>{detail.label}:</DetailText>
          <DetailText style={styles.value}>{detail.value}</DetailText>
        </DetailRow>
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
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 15,
    color: 'orange',
    fontWeight: '800',
  },
});

export default ExtraDetails;
