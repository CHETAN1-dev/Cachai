import React from 'react';
import {View, StyleSheet} from 'react-native';

const NavIcon = ({Icon}) => {
  return (
    <View style={styles.iconWrapper}>
      <Icon />
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
});

export default NavIcon;
