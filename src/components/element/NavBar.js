import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeIcon from '../../assets/icons/NavBarIcon/hom';
import PromotionIcon from '../../assets/icons/NavBarIcon/promotion';
import ReorderIcon from '../../assets/icons/NavBarIcon/reOder';
import FavouriteIcon from '../../assets/icons/NavBarIcon/favourite';
import MoreIcon from '../../assets/icons/NavBarIcon/more';
import NavItem from '../molecule/NavItem';

const NavBar = ({
  backgroundColor = '#FF6600',
  height = 60,
  justifyContent = 'space-around',
  iconSize = 35,
  onItemPress,
}) => {
  const navItems = [
    {label: 'Home', Icon: HomeIcon},
    {label: 'Promotions', Icon: PromotionIcon},
    {label: 'Reorder', Icon: ReorderIcon},
    {label: 'Favorites', Icon: FavouriteIcon},
    {label: 'More', Icon: MoreIcon},
  ];

  return (
    <View style={[styles.navBar, {backgroundColor, height, justifyContent}]}>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          Icon={item.Icon}
          onPress={() => onItemPress?.(item.label)}
          iconSize={iconSize}>
          {item.label}
        </NavItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default NavBar;
