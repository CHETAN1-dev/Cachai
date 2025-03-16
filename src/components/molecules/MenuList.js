import React, {useState} from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import AddIcon from '../../assets/icons/MenuScreenIcon/add';
import Check from '../../assets/icons/MenuScreenIcon/Check';

const MenuList = ({menuItems, selectedCategory, onAddItem}) => {
  const [addedItems, setAddedItems] = useState({});

  const handleAddItem = item => {
    setAddedItems(prevState => ({
      ...prevState,
      [item.id]: !prevState[item.id],
    }));
    onAddItem(item);
  };

  const groupedMenu =
    selectedCategory === 'All'
      ? menuItems.reduce((acc, item) => {
          let section = acc.find(sec => sec.title === item.category);
          if (section) {
            section.data.push(item);
          } else {
            acc.push({title: item.category, data: [item]});
          }
          return acc;
        }, [])
      : [
          {
            title: selectedCategory,
            data: menuItems.filter(item => item.category === selectedCategory),
          },
        ];
  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedMenu}
        keyExtractor={item => item.id.toString()}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.orangeLine} />
          </View>
        )}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            {/* Item Image */}
            <Image source={{uri: item.image}} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleAddItem(item)}>
              <View style={styles.iconContainer}>
                {addedItems[item.id] ? <Check /> : <AddIcon />}
              </View>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  sectionHeader: {
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6600',
  },
  orangeLine: {
    height: 2,
    backgroundColor: '#FF6600',
    marginTop: 4,
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#FF6600',
  },
  itemImage: {
    width: 50, // Adjust based on your design
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    color: '#666',
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default MenuList;
