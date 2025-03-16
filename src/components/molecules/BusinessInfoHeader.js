import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapIcon from '../../assets/icons/BuisnessInfoIcon/map';
import StarIcon from '../../assets/icons/BuisnessInfoIcon/star';
import ClockIcon from '../../assets/icons/BuisnessInfoIcon/clock';
import DeliveryToggle from '../atoms/DeliveryToggle';
import Openclock from '../../assets/icons/BuisnessInfoIcon/OpenClock';
const StatItem = ({Icon, value, iconColor}) => (
  <View style={styles.statItem}>
    <Icon width={30} height={25} fill={iconColor} />
    <Text style={styles.statText}>{value}</Text>
  </View>
);

const BusinessInfoHeader = ({
  name = 'Cachai Po!',
  waitTime = '25 mins',
  distance = '0.5 miles',
  rating = '4.9',
  isOpen = false,
  onDetailsPress,
}) => {
  const statusText = isOpen ? 'Open Now' : 'Closed';
  const StatusIcon = isOpen ? Openclock : ClockIcon;
  const statusTextColor = isOpen ? '#FF6600' : '#000'; // Orange if open, Black if closed

  return (
    <View style={styles.container}>
      <Text style={styles.restaurantName}>{name}</Text>

      <View style={styles.timeAndIconsContainer}>
        <Text style={styles.waitTime}>
          Estimated Wait Time:{' '}
          <Text style={styles.waitTimeBold}>{waitTime}</Text>
        </Text>

        <DeliveryToggle />
      </View>

      <View style={styles.statsContainer}>
        <StatItem Icon={MapIcon} value={distance} style={styles.statText} />
        <StatItem Icon={StarIcon} value={rating} style={styles.statText} />
        {/* Only changing the text color for the clock icon */}
        <StatItem
          Icon={StatusIcon}
          value={statusText}
          iconColor={statusTextColor}
        />
      </View>

      <TouchableOpacity onPress={onDetailsPress}>
        <Text style={styles.detailsLink}>More Business Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBECE2',
    padding: 12,
    borderRadius: 10,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'BeVietnamPro-Bold',
  },
  timeAndIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -5,
    justifyContent: 'space-between',
  },
  waitTime: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'BeVietnamPro-Bold',
  },
  waitTimeBold: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#FF6600',
    fontFamily: 'BeVietnamPro-Bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 5,
  },
  statItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  statText: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color:'#FF6600',
    fontFamily: 'BeVietnamPro-Bold',
  },
  detailsLink: {
    color: '#007B7F',
    marginTop: 8,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontFamily: 'BeVietnamPro-Bold',
  },
});

export default BusinessInfoHeader;
