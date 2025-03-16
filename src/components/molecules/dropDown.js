import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import useToggle from '../hooks/usetoggle';
import ChevronIcon from '../../assets/icons/BuisnessDetailIcon/chevron';
import {DetailRow} from '../atoms/DetailRow';
import {DetailText} from '../atoms/Detail';
import ClockIconn from '../../assets/icons/BuisnessDetailIcon/Clockk';
const DropDown = ({title, data}) => {
  const {isOpen, toggleAccordion} = useToggle();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <DetailRow Icon={ClockIconn}>
          <DetailText style={styles.headerText}>{title}</DetailText>
        </DetailRow>
        <DetailRow
          Icon={ChevronIcon}
          color="black"
          style={[styles.chevron, isOpen && styles.chevronOpen]}
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.content}>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <View key={index} style={styles.row}>
                <Text style={styles.dayText}>{item.day} - </Text>
                <Text
                  style={[
                    styles.itemText,
                    item.hours === 'Closed' && styles.noValue,
                  ]}>
                  {item.hours}
                </Text>
              </View>
            ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 1,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  headerText: {
    marginLeft: 10,
  },
  chevron: {
    transform: [{rotate: '-90deg'}],
    position: 'absolute',
    right: 10,
  },
  chevronOpen: {
    transform: [{rotate: '360deg'}],
  },
  content: {
    paddingLeft: 50,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0C9693',
    marginRight:10,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 4,
    color: '#0C9693',
    marginLeft:10,
  },
  noValue: {
    color: 'grey',
  },
});

export default DropDown;
