import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BusinessBanner from '../../BusinessBanner/atom/BusinessBanner';
import BusinessStats from '../../BusinessBanner/atom/BusinessStats';

const BusinessInfo = ({
  businessName = 'Cachai Po!',
  description = 'We specialize in authentic and traditional Chilean food. Experience fresh Chilean bread and BBQ.',
  bannerImage,
}) => {
  return (
    <View style={styles.container}>
      <BusinessBanner imageSource={bannerImage} />
      <View style={styles.detailsWrapper}>
        <Text style={styles.businessName}>{businessName}</Text>
        <Text style={styles.businessDescription}>{description}</Text>
      </View>
      <BusinessStats />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  businessName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  businessDescription: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    fontFamily: 'BeVietnamPro-Bold.ttf',
    marginBottom: 16,
  },
});

export default BusinessInfo;
