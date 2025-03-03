import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BackIcon from '../../../../assets/icons/BuisnessInfoIcon/back';
import LikeIcon from '../../../../assets/icons/BuisnessInfoIcon/Like';

const BusinessBanner = ({
  bannerImage = require('../../../../assets/images/57bac1200a0694ec6296d18f87702f82.png'),
  onBackPress,
  onLikePress,
  iconSize = 50,
  iconColor = 'black',
}) => {
  return (
    <View style={styles.bannerContainer}>
      <Image source={bannerImage} style={styles.bannerImage} />
      <TouchableOpacity style={styles.backIcon} onPress={onBackPress}>
        <BackIcon width={iconSize} height={iconSize} fill={iconColor} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.likeButton} onPress={onLikePress}>
        <LikeIcon width={iconSize * 0.85} height={iconSize * 0.8} fill={iconColor} />
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
    bottom:-50,
    right: 10,
    zIndex: 10,
  },
});

export default BusinessBanner;
