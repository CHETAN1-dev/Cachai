import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');

export default function Review({
  title = 'Reviews',
  Reviewimage1 = require('../../assets/images/Frame_244.png'),
  Reviewimage2 = require('../../assets/images/Frame_246.png'),
}) {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source={Reviewimage1} />
        <Image source={Reviewimage2} />
      </ScrollView>

      <View style={styles.orangeLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  reviewContainer: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingLeft: 8,
    fontFamily: 'BeVietnamPro-Bold',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  reviewImage: {
    width: width * 0.3,
    height: width * 0.3,
    marginRight: 15,
    borderRadius: 10,
  },
  orangeLine: {
    height: 2,
    backgroundColor: '#FFA500',
    borderRadius: 2,
    marginTop: 8,
  },
});
