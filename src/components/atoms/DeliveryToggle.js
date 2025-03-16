import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DeliveryToggle = () => {
  const [selected, setSelected] = useState('Delivery'); // Default selection

  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          selected === 'Delivery' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => setSelected('Delivery')}>
        <Text
          style={[
            styles.buttonText,
            selected === 'Delivery' ? styles.activeText : styles.inactiveText,
          ]}>
          Delivery
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.toggleButton,
          selected === 'Takeout' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => setSelected('Takeout')}>
        <Text
          style={[
            styles.buttonText,
            selected === 'Takeout' ? styles.activeText : styles.inactiveText,
          ]}>
          Takeout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5', // Light gray background
    borderRadius: 50,
    padding: 3,
    width: 150,
    justifyContent: 'center',
  },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 50,
  },
  activeButton: {
    backgroundColor: '#009A9A', // Active cyan color
  },
  inactiveButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeText: {
    color: '#FFFFFF',
  },
  inactiveText: {
    color: '#333333',
  },
});

export default DeliveryToggle;
