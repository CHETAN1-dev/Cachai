import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import BackIcon from '../../assets/icons/BuisnessInfoIcon/back';
import LikeIcon from '../../assets/icons/BuisnessInfoIcon/Like';

const BusinessBanner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={require('../../assets/images/57bac1200a0694ec6296d18f87702f82.png')}
        style={styles.bannerImage}
      />
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => console.log('Back icon pressed')}>
        <BackIcon width={50} height={50} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.likeButton}
        onPress={() => console.log('Like button pressed')}>
        <LikeIcon width={42} height={40} />
      </TouchableOpacity>
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
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  likeButton: {
    position: 'absolute',
    top: 210,
    right: 10,
    zIndex: 10,
  },
});

export default BusinessBanner;
