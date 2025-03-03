import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const IconButton = ({onPress, Icon, size = 32, style, accessibilityLabel}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      accessibilityLabel={accessibilityLabel}>
      <Icon width={size} height={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IconButton;
