import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import NavIcon from '../atoms/NavIcon';
import NavLabel from '../atoms/NavLabel';

const NavItem = ({label, Icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <NavIcon Icon={Icon} />
      <NavLabel>{label}</NavLabel>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavItem;
