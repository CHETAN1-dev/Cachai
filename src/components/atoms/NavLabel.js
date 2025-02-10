import React from 'react';
import {Text, StyleSheet} from 'react-native';

const NavLabel = ({children}) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginTop: -4,
    color: 'black',
  },
});

export default NavLabel;
