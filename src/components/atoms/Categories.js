import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CategoriesTabs = ({ categories = [], onCategoryChange = () => {} }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories.length > 0 ? categories[0] : null);

  const handlePress = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => handlePress(category)}
          activeOpacity={0.7}
          style={styles.tab}
        >
          <Text style={[styles.text, selectedCategory === category && styles.selectedText]}>
            {category}
          </Text>
          {selectedCategory === category && <View style={styles.underline} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderBottomColor: '#ddd',
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#008080',
    fontWeight: 'bold',
  },
  underline: {
    width: '60%',
    height: 3,
    backgroundColor: '#008080',
    borderRadius: 2,
    marginTop: 3,
  },
});

export default CategoriesTabs;



