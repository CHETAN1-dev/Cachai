import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HomeIcon from '../assets/icons/NavBarIcon/hom';
import PromotionIcon from '../assets/icons/NavBarIcon/promotion';
import ReoderIcon from '../assets/icons/NavBarIcon/reOder';
import FavouriteIcon from '../assets/icons/NavBarIcon/favourite';
import MoreIcon from '../assets/icons/NavBarIcon/more';

const NavBar = () => {
  const navItems = [
    {label: 'Home', icon: <HomeIcon />},
    {label: 'Promotions', icon: <PromotionIcon />},
    {label: 'Reorder', icon: <ReoderIcon />},
    {label: 'Favorites', icon: <FavouriteIcon />},
    {label: 'More', icon: <MoreIcon />},
  ];

  return (
    <View style={styles.navBar}>
      {navItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.navItem}>
          <View style={styles.iconWrapper}>{item.icon}</View>
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
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
    borderTopRightRadius:1,
    elevation: 4,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 15,
    marginTop:-6,
    color: 'black',
  },
});

export default NavBar;
