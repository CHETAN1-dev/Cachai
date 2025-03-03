import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DetailRow} from '../../molecule/DetailRow';
import {DetailText, LinkText} from '../../atoms/Detail';

const ContactInformation = ({
  title = 'Contact Information',
  contacts = [],
  style,
}) => {
  return (
    <View style={[styles.section, style]}>
      <DetailText style={styles.heading}>{title}</DetailText>
      {contacts.map((contact, index) => (
        <DetailRow key={index} Icon={contact.Icon}>
          {contact.isLink ? (
            <LinkText url={contact.value}>{contact.label}</LinkText>
          ) : (
            <DetailText>{contact.label}</DetailText>
          )}
        </DetailRow>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ContactInformation;
