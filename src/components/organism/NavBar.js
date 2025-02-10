import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavItem from '../molecule/NavItem';
import HomeIcon from '../../assets/icons/NavBarIcon/hom';
import PromotionIcon from '../../assets/icons/NavBarIcon/promotion';
import ReorderIcon from '../../assets/icons/NavBarIcon/reOder';
import FavouriteIcon from '../../assets/icons/NavBarIcon/favourite';
import MoreIcon from '../../assets/icons/NavBarIcon/more';

const NavBar = () => {
  const navItems = [
    {label: 'Home', Icon: HomeIcon},
    {label: 'Promotions', Icon: PromotionIcon},
    {label: 'Reorder', Icon: ReorderIcon},
    {label: 'Favorites', Icon: FavouriteIcon},
    {label: 'More', Icon: MoreIcon},
  ];

  return (
    <View style={styles.navBar}>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          label={item.label}
          Icon={item.Icon}
          onPress={() => console.log(`${item.label}pressed`)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#FF6600',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    elevation: 4,
  },
});

export default NavBar;
