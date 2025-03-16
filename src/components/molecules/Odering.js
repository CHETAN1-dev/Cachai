import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Ordering = ({Icon, label, size = 85}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.option}
      onPress={() => navigation.navigate('MenuScreen')}>
      <Icon width={size} height={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    alignItems: 'center',
    marginHorizontal: 1,
  },
});

export default Ordering;
