import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BusinessBanner from '../molecule/BusinessBanner';
import BusinessStats from '../molecule/BusinessStats';
const BusinessInfo = () => {
  return (
    <View style={styles.container}>
      <BusinessBanner />
      <View style={styles.detailsWrapper}>
        <Text style={styles.businessName}>Cachai Po!</Text>
        <Text style={styles.businessDescription}>
          We specialize in authentic and traditional Chilean food. Experience
          fresh Chilean bread and BBQ.
        </Text>
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
    fontWeight:'bold',
    fontFamily:'BeVietnamPro-Bold.ttf',
    marginBottom: 16,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
});

export default BusinessInfo;
