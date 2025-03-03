import React from 'react';
import ForkIcon from '../../../assets/icons/BuisnessDetailIcon/fork';
import ClockIcon from '../../../assets/icons/BuisnessDetailIcon/Clockk';
import WebIcon from '../../../assets/icons/BuisnessDetailIcon/web';
import UsdIcon from '../../../assets/icons/BuisnessDetailIcon/usd';
import ChevronIcon from '../../../assets/icons/BuisnessDetailIcon/chevron';
import {StyleSheet, Text, View} from 'react-native';
import {DetailRow} from '../../molecule/DetailRow';
import {DetailText, LinkText} from '../../atoms/Detail';
const BusinessDetails = ({
  title = 'Business Details:',
  buisnesstitle = 'Traditional and Modern Chiilean Food',
  openhours = 'Wednesday- Sunday: 11am-8pm',
  price = '$10 - $25',
  url = 'https://cachaipochileanhillsboro.com/',
}) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <DetailRow Icon={ForkIcon}>
        <DetailText>{buisnesstitle}</DetailText>
      </DetailRow>
      <DetailRow Icon={ClockIcon}>
        <DetailText>{openhours}</DetailText>
        <ChevronIcon style={styles.chevron} />
      </DetailRow>
      <DetailRow Icon={WebIcon}>
        <LinkText>{url}</LinkText>
      </DetailRow>
      <DetailRow Icon={UsdIcon}>
        <DetailText>{price}</DetailText>
      </DetailRow>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginBottom: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chevron: {
    marginLeft: 'auto',
    color: '#999',
  },
  text: {
    margin: 10,
    fontSize: 16,
  },
});

export default BusinessDetails;
