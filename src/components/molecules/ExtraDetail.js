import React from 'react';
import {View, StyleSheet} from 'react-native';
import DogIcon from '../../assets/icons/ExtraDetailIcon/pet';
import CamageIcon from '../../assets/icons/ExtraDetailIcon/family';
import CarIcon from '../../assets/icons/ExtraDetailIcon/car';
import LampIcon from '../../assets/icons/ExtraDetailIcon/ambience';
import {DetailRow} from '../atoms/DetailRow';
import {DetailText} from '../atoms/Detail';
import TruckIcon from '../../assets/icons/ExtraDetailIcon/TruckICon';
import WheelIcon from '../../assets/icons/ExtraDetailIcon/WheelICon';
import sproutIcon from '../../assets/icons/ExtraDetailIcon/sproutIcon';
const ExtraDetails = () => {
  const extraDetails = [
    { label: 'Accessible', value: 'Yes', Icon: WheelIcon },
    { label: 'Parking', value: 'Private Lot', Icon: CarIcon },
    { label: 'Food Cart', value: 'No', Icon: TruckIcon },
    { label: 'Ambience', value: 'Casual', Icon: LampIcon },
    { label: 'Family Friendly', value: 'Yes', Icon:CamageIcon },
    { label: 'Pet Friendly', value: 'No', Icon: DogIcon },
  ];

  const dietaryOptions = [
    { label: 'Vegetarian', value: 'Yes' },
    { label: 'Vegan', value: 'No' },
    { label: 'Local/Organic', value: 'No' },
    { label: 'Gluten Free', value: 'Yes' },
  ];

  return (
    <View style={styles.container}>
      <DetailText style={styles.header}>Extra Details:</DetailText>
      {extraDetails.map((detail, index) => (
        <DetailRow key={index} Icon={detail.Icon}>
          <DetailText style={styles.label}>{detail.label}:</DetailText>
          <DetailText
            style={[
              styles.value,
              detail.value === 'No' && styles.noValue,
            ]}
          >
            {detail.value}
          </DetailText>
        </DetailRow>
      ))}

      {/* Dietary Options Section */}
      <DetailRow Icon={sproutIcon}>
        <DetailText style={styles.label}>Dietary Options</DetailText>
      </DetailRow>
      {dietaryOptions.map((option, index) => (
        <View key={index} style={styles.dietaryRow}>
          <DetailText style={styles.dash}>-</DetailText>
          <DetailText style={styles.label}>{option.label}:</DetailText>
          <DetailText
            style={[
              styles.value,
              option.value === 'No' && styles.noValue,
            ]}
          >
            {option.value}
          </DetailText>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#B6E0E1',
    borderRadius: 8,
    paddingBottom:15,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 9,
    color: '#000',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 15,
    color: '#0C9693',
    fontWeight: '800',
  },
  noValue: {
    color: '#A0A0A0', // Grey color for 'No' values
  },
  dietaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20, // Indentation
    marginBottom: 4,
  },
  dash: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 6,
  },
});

export default ExtraDetails;
