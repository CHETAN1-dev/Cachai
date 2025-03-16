// BusinessInfoContainer.js
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import BusinessInfoAccordion from '../molecules/BusinessDetails';
import ChevronIcon from '../../assets/icons/BuisnessDetailIcon/chevron';
import useToggle from '../hooks/usetoggle';

const BusinessInfoContainer = ({
  title = 'Business Details:',
  buisnesstitle = 'Traditional and Modern Chilean Food',
  price = '$10 - $25',
  url = 'https://cachaipochileanhillsboro.com/',
}) => {
  const {isOpen, toggleAccordion} = useToggle();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleAccordion}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <ChevronIcon style={[styles.chevron, isOpen && styles.chevronOpen]} />
      </TouchableOpacity>
      {isOpen && (
        <BusinessInfoAccordion
          buisnesstitle={buisnesstitle}
          price={price}
          url={url}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#159B9E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 17,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    boxShadow:'3px 2px 15px rgb(160, 182, 183)',

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'BeVietnamPro-Bold.ttf',
    color: 'white',
  },
  chevron: {
    color: 'white',
    transform: [{rotate: '-90deg'}],
  },
  chevronOpen: {
    transform: [{rotate: '360deg'}],
  },
});

export default BusinessInfoContainer;
