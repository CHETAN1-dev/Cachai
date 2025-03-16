import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapIcon from '../../assets/icons/BuisnessInfoIcon/map';
import StarIcon from '../../assets/icons/BuisnessInfoIcon/star';
import ClockIcon from '../../assets/icons/BuisnessInfoIcon/clock';
import FanIcon from '../../assets/icons/BuisnessInfoIcon/fans';
import SuperFanIcon from '../../assets/icons/BuisnessInfoIcon/superfan';
import Openclock from '../../assets/icons/BuisnessInfoIcon/OpenClock';

const StatItem = ({Icon, value, iconSize, textStyle}) => (
  <View style={styles.statItem}>
    <Icon width={iconSize} height={iconSize} />
    <Text style={[styles.statText, textStyle]}>{value}</Text>
  </View>
);

const BusinessStats = ({
  distance = '0.4 miles',
  rating = '4.9',
  openTime = 'Open in 2 hrs',
  isOpen = true,
  fans = '16 Fans',
  superFans = '9 Super Fans',
  iconSize = 25,
  containerStyle,
  textStyle,
}) => {
  const OpenStatusIcon = isOpen ? Openclock : ClockIcon; // Switch icon based on status
  const displayTime = isOpen ? 'Open' : openTime;

  return (
    <View>
      <View style={styles.orangeLine} />
      <View style={[styles.statsContainer, containerStyle]}>
        <StatItem
          Icon={MapIcon}
          value={distance}
          iconSize={iconSize}
          textStyle={textStyle}
        />
        <StatItem
          Icon={StarIcon}
          value={rating}
          iconSize={iconSize}
          textStyle={textStyle}
        />
        <StatItem
          Icon={OpenStatusIcon}
          value={displayTime}
          iconSize={iconSize}
          textStyle={textStyle}
        />
      </View>
      <View style={styles.statsContainerBottom}>
        <StatItem
          Icon={FanIcon}
          value={fans}
          iconSize={iconSize}
          textStyle={textStyle}
        />
        <StatItem
          Icon={SuperFanIcon}
          value={superFans}
          iconSize={iconSize}
          textStyle={textStyle}
        />
      </View>
      <View style={styles.orangeLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  statsContainerBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  statText: {
    fontSize: 18,
    marginLeft: 4,
    fontWeight: 'bold',
    fontFamily: 'BeVietnamPro-Bold',
    color: '#FF6600',
  },
  orangeLine: {
    height: 2,
    backgroundColor: '#FF6600',
    borderRadius: 2,
    marginBottom: 8,
    marginHorizontal: 14,
  },
});

export default BusinessStats;
