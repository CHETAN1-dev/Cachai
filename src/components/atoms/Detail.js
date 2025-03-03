import React from 'react';
import {Linking, Text, TouchableOpacity} from 'react-native';

export const DetailText = ({
  children,
  style,
  fontSize = 16,
  fontWeight = 'bold',
  marginLeft = 8,
}) => (
  <Text style={[{fontSize, fontWeight, marginLeft}, style]}>{children}</Text>
);
export const LinkText = ({
  url = 'https://cachaipochileanhillsboro.com/',
  children,
  style,
  fontSize = 16,
  fontWeight = 'bold',
  marginLeft = 8,
}) => (
  <TouchableOpacity onPress={() => Linking.openURL(url)}>
    <Text style={[{fontSize, fontWeight, marginLeft}, style]}>{children}</Text>
  </TouchableOpacity>
);
