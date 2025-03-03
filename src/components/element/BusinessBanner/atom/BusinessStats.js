import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapIcon from '../../../../assets/icons/BuisnessInfoIcon/map';
import StarIcon from '../../../../assets/icons/BuisnessInfoIcon/star';
import ClockIcon from '../../../../assets/icons/BuisnessInfoIcon/clock';

const StatItem = ({ Icon, value, iconSize, iconColor, textStyle }) => (
  <View style={styles.statItem}>
    <Icon width={iconSize} height={iconSize} fill={iconColor} />
    <Text style={[styles.statText, textStyle]}>{value}</Text>
  </View>
);

const BusinessStats = ({
  distance = '0.4 miles',
  rating = '4.9',
  openTime = 'Open in 2hrs',
  iconSize = 24,
  containerStyle,
  textStyle,
  dividerStyle,
}) => {
  return (
    <View>
      <View style={styles.orangeLine} />
      <View style={[styles.statsContainer, containerStyle]}>
        <StatItem Icon={MapIcon} value={distance} iconSize={iconSize} textStyle={textStyle} />
        <View style={[styles.divider, dividerStyle]} />
        <StatItem Icon={StarIcon} value={rating} iconSize={iconSize}  textStyle={textStyle} />
        <View style={[styles.divider, dividerStyle]} />
        <StatItem Icon={ClockIcon} value={openTime} iconSize={iconSize} textStyle={[styles.time, textStyle]} />
      </View>
      <View style={styles.orangeLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingVertical: 10,
    borderRadius: 8,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontSize: 16,
    marginLeft: 4,
    fontWeight: 'bold',
    fontFamily: 'BeVietnamPro-Bold',
    color: 'orange',
  },
  time: {
    fontSize: 16,
    marginLeft: 4,
    color: 'black',
  },
  divider: {
    width: 1,
    height: '80%',
    marginHorizontal: 18,
  },
  orangeLine: {
    height: 2,
    backgroundColor: '#FFA500',
    borderRadius: 2,
  },
});

export default BusinessStats;
