import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from '../atoms/IconButtoon';
import TitleText from '../atoms/TitleText';
import BellIcon from '../../assets/icons/HeaderIcon/bell';
import CartIcon from '../../assets/icons/HeaderIcon/cart';

const Header = () => {
  return (
    <View style={styles.container}>
      <IconButton
        onPress={() => console.log('Bell button pressed')}
        Icon={BellIcon}
      />
      <TitleText>Business Details</TitleText>
      <IconButton
        onPress={() => console.log('Cart button pressed')}
        Icon={CartIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FF6600',
  },
});

export default Header;
