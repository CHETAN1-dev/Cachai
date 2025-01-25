import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BellIcon from '../assets/icons/HeaderIcon/bell';
import CartIcon from '../assets/icons/HeaderIcon/cart';
const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <BellIcon onPress={() => console.log('Bell button pressed')}/>
      </TouchableOpacity>
      <Text style={styles.title}>Business Details</Text>
      <TouchableOpacity>
        <CartIcon onPress={() => console.log('Cart button pressed')}/>
      </TouchableOpacity>
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
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'center',
    top:8,
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Header;
