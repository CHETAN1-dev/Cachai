import React from 'react';
import {View} from 'react-native';

export const DetailRow = ({
  Icon,
  children,
  style,
  flexDirection = 'row',
  alignItems = 'center',
  marginBottom = 10,
}) => (
  <View style={[{flexDirection, alignItems, marginBottom}, style]}>
    <Icon width={24} height={24} />
    {children}
  </View>
);
