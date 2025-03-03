import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../Header/atom/IconButton';
import TitleText from '../Header/atom/TitleText';
import BellIcon from '../../../assets/icons/HeaderIcon/bell';
import CartIcon from '../../../assets/icons/HeaderIcon/cart';

const Header = ({
  title = 'Business Details',
  onBellPress,
  onCartPress,
  backgroundColor = '#FF6600',
  padding = 14,
  titleStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, { backgroundColor, padding }, containerStyle]}>
      <IconButton onPress={onBellPress} Icon={BellIcon}/>
      <TitleText style={titleStyle}>{title}</TitleText>
      <IconButton onPress={onCartPress} Icon={CartIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
