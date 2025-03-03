import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import NavLabel from '../atoms/NavLabel';

const NavItem = ({children, Icon, iconSize = 28, onPress}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Icon width={iconSize} height={iconSize} />
      </View>
      <NavLabel>{children}</NavLabel>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NavItem;
