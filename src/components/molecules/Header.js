import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from '../atoms/IconButton';
import TitleText from '../atoms/TitleText';
import BackIcon from '../../assets/icons/HeaderIcon/back';
import CartIcon from '../../assets/icons/HeaderIcon/cart';
import {useNavigation} from '@react-navigation/native';
const Header = ({
  title = 'Business Details',
  onBellPress,
  onCartPress,
  backgroundColor = '#FF6600',
  padding = 14,
  titlecolor,
  containerStyle,
  size,
  IconColor = 'black',
}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[styles.container, {backgroundColor, padding}, containerStyle]}>
      <IconButton
        onPress={() => navigation.goBack()}
        Icon={BackIcon}
        size={32}
        color={IconColor}
      />

      <TitleText style={[{color: titlecolor}]}>{title}</TitleText>
      <IconButton
        onPress={onCartPress}
        Icon={CartIcon}
        size={32}
        color={IconColor}
      />
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
