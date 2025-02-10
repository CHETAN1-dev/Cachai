import React from 'react';
import { TouchableOpacity } from 'react-native';

const IconButton = ({ onPress, Icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconButton;