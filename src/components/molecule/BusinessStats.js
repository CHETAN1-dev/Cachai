import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapIcon from '../../assets/icons/BuisnessInfoIcon/map';
import StarIcon from '../../assets/icons/BuisnessInfoIcon/star';
import ClockIcon from '../../assets/icons/BuisnessInfoIcon/clock';

const BusinessStats = () => {
  return (<View>
    <View style={styles.orangeLine}/>
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
        <Text style={styles.time}>Open in 2hrs</Text>
      </View>
    </View>
    <View style={styles.orangeLine}/>
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
    fontWeight:'bold',
    fontFamily:'BeVietnamPro-Bold.ttf',
    color:'orange',
  },
  time: {
    fontSize: 16,
    marginLeft: 4,
    color:'black',
  },
  divider: {
    width: 1,
    height: '80%',
    marginHorizontal: 18,
  },
  orangeLine:{
    height:2,
    backgroundColor:'#FFA500',
    borderRadius:2,
  },
   upperorangeLine:{
    height:2,
    backgroundColor:'#FFA500',
    marginBottom:9,
    borderRadius:2,
  },
});

export default BusinessStats;
