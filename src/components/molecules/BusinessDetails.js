import React from 'react';
import {StyleSheet, View} from 'react-native';
import ForkIcon from '../../assets/icons/BuisnessDetailIcon/fork';
import WebIcon from '../../assets/icons/BuisnessDetailIcon/web';
import UsdIcon from '../../assets/icons/BuisnessDetailIcon/usd';
import {DetailRow} from '../atoms/DetailRow';
import {DetailText, LinkText} from '../atoms/Detail';
import ContactInformation from './contact';
import {contacts} from './contactData';
import ExtraDetails from './ExtraDetail';
import OpenHoursDropdown from './HoursDropDown';

const BusinessInfoAccordion = ({buisnesstitle, price, url}) => {
  return (
    <View style={styles.content}>
      <DetailRow Icon={ForkIcon}>
        <DetailText>{buisnesstitle}</DetailText>
      </DetailRow>
      <OpenHoursDropdown/>
      <DetailRow Icon={WebIcon}>
        <LinkText>{url}</LinkText>
      </DetailRow>
      <DetailRow Icon={UsdIcon}>
        <DetailText>{price}</DetailText>
      </DetailRow>
      <View style={styles.separator} />
      <ContactInformation contacts={contacts} />
      <View style={styles.separator} />
      <ExtraDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: 12,
    backgroundColor: '#B6E0E1',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 18,
    marginHorizontal: 5,
    boxShadow: '1px 2px 10px rgb(160, 182, 183)',
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: '#159B9E',
    marginVertical: 5,
  },
});

export default BusinessInfoAccordion;
