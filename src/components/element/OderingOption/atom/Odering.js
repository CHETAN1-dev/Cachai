import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';

const Ordering = ({ Icon, label,
  size = 70,
 }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={() => console.log(`${label} pressed`)}>
      <Icon width={size} height={size}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
  },
});

export default Ordering;
