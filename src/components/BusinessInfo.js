import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Banner from '../assets/images/banner';
import BackIcon from '../assets/icons/BuisnessInfoIcon/back';
import LikeIcon from '../assets/icons/BuisnessInfoIcon/Like';
import MapIcon from '../assets/icons/BuisnessInfoIcon/map';
import StarIcon from '../assets/icons/BuisnessInfoIcon/star';
import ClockIcon from '../assets/icons/BuisnessInfoIcon/clock';

const BusinessInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Banner style={styles.banner} />
        {/* <Image source={require('../assets/images/Frame 42.png')}/> */}
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => console.log('Back icon pressed')}>
          <BackIcon width={50} height={50} />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsWrapper}>
        <Text style={styles.businessName}>Cachai Po!</Text>
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => console.log('Like button pressed')}>
          <LikeIcon width={42} height={40} />
        </TouchableOpacity>
        <Text style={styles.businessDescription}>
          We specialize in authentic and traditional Chilean food. Experience
          fresh Chilean bread and BBQ.
        </Text>

        {/* Stats Section */}
        <View style={styles.orangeLine} />
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <MapIcon width={24} height={24} />
            <Text style={styles.statText}>0.4 miles</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <StarIcon width={24} height={24} />
            <Text style={styles.statText}>4.9</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <ClockIcon width={24} height={24} />
            <Text style={styles.statTextt}>Open in 2hrs</Text>
          </View>
        </View>
        <View style={styles.orangeLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 8,
    paddingHorizontal: 1,
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerContainer: {
    height: 190,
    width: 360,
    paddingTop: -1,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    gap: 10,
  },
  backIcon: {
    position: 'absolute',
    top: 11,
    left: 20,
    zIndex: 10,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 9,
    zIndex: 30,
  },
  detailsWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  businessName: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 8,
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  businessDescription: {
    fontSize: 14,
    textAlign: 'left',
    top:-6,
    lineHeight: 20,
    marginBottom: 16,
    paddingVertical: 3,
    fontWeight:'bold',
    fontFamily:'BeVietnamPro-Bold.ttf',
    paddingLeft:4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 9,
    backgroundColor: '#f9f9f9',
    paddingVertical: 1,
    borderRadius: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 16,
    color: '#FFA500',
    marginLeft:4,
    fontWeight: 'bold',
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  statTextt: {
    fontSize: 16,
    color: 'black',
    marginLeft:4,
    fontWeight: '700',
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  divider: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 18,
  },
  orangeLine: {
    height: 2,
    backgroundColor: '#FFA500',
    marginBottom: 1,
    borderRadius: 2,
  },
});

export default BusinessInfo;
