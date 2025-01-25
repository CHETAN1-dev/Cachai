import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import ForkIcon from '../assets/icons/BuisnessDetailIcon/fork';
import ClockIconn from '../assets/icons/BuisnessDetailIcon/Clockk';
import WebIcon from '../assets/icons/BuisnessDetailIcon/web';
import UsdICon from '../assets/icons/BuisnessDetailIcon/usd';
import ChevronIcon from '../assets/icons/BuisnessDetailIcon/chevron'; // Import Chevron Right Icon

const BusinessDetails = () => {
  const handleLinkPress = () => {
    Linking.openURL('https://cachaipochileanhillsboro.com/');
  };

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.sectionTitle}>Business Details:</Text>
      <View style={styles.row}>
        <ForkIcon />
        <Text style={styles.label}>Traditional and Modern Chilean Food</Text>
      </View>
      <View style={styles.row}>
        <ClockIconn />
        <Text style={styles.label}>Wednesday - Sunday: 11am - 8pm</Text>
        <ChevronIcon style={styles.chevron} />
      </View>
      <TouchableOpacity style={styles.row} onPress={handleLinkPress}>
        <WebIcon />
        <Text style={[styles.label, styles.link]}>
          https://cachaipochileanhillsboro.com/
        </Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <UsdICon />
        <Text style={styles.label}>$10 - $25</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginBottom:1,
    paddingHorizontal: 15,
    paddingVertical:7,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight:'bold',
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  chevron: {
    marginLeft: 'auto',
    color: '#999',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default BusinessDetails;
