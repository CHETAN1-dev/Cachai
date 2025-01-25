import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import LoactionIcon from '../assets/icons/ContactInfoIcon/Loaction';
import PhoneIcon from '../assets/icons/ContactInfoIcon/phone';
import EmailIcon from '../assets/icons/ContactInfoIcon/email';
const ContactInformation = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Contact Information:</Text>
      <View style={styles.row}>
       <LoactionIcon style={styles.icon}/>
        <Text style={styles.label}>
          320 SE Baseline St, Hillsboro, OR 97123, US
        </Text>
      </View>
      <View style={styles.row}>
        <PhoneIcon style={styles.icon}/>
        <Text
           style={styles.contact}
          onPress={() => Linking.openURL('tel:7863264746')}>
          (786) 326-4746
        </Text>
      </View>
      <View style={styles.row}>
        <EmailIcon style={styles.icon}/>
        <Text
          style={styles.label}
          onPress={() => Linking.openURL('mailto:cachaipoh@gmail.com')}>
          cachaipoh@gmail.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: -7,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft:16,
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginLeft:17,
  },
  label: {
    fontSize:16,
    marginLeft:6,
    fontWeight:'bold',
    fontFamily:'BeVietnamPro-Bold.ttf',
  },
  contact:{
    fontSize:16,
    textDecorationLine: 'underline',
    fontWeight:'bold',
    marginLeft:6,
  },
  icon:{
  width:24,
  height:24,
  marginRight:2,
  },
});

export default ContactInformation;
