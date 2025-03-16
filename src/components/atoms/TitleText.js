import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({
  children,
  color = 'black',
  fontSize = 18,
  textAlign = 'center',
  fontFamily = 'BeVietnamPro-Bold',
  style,
}) => {
  return (
    <Text style={[styles.title, { color, fontSize, textAlign, fontFamily }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    lineHeight: 24,
  },
});

export default TitleText;
