import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TitleText = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 18,
    top:6,
    fontWeight: 'bold',
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: 'BeVietnamPro-Bold.ttf',
  },
});

export default TitleText;
