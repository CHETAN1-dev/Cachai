import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
const BusinessBanner = ({
  bannerImage = require('../../assets/images/57bac1200a0694ec6296d18f87702f82.png'),
  onBackPress,
  onLikePress,
  iconSize = 50,
  iconColor = 'black',
}) => {
  return (
    <View style={styles.bannerContainer}>
      <Image source={bannerImage} style={styles.bannerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
});

export default BusinessBanner;
