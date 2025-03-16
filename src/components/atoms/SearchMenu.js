import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import SearchIcon from '../../assets/icons/MenuScreenIcon/Search';

const SearchMenu = ({placeholder = 'Search Menu', onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#5A7F75"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.iconContainer}>
        <SearchIcon width={30} height={30} fill="#5A7F75" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B6E0E1',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 45,
    marginHorizontal: 20,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#A0D9C3',
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: '#333',
    fontWeight: '600',
    paddingVertical: 5,
  },
  iconContainer: {
    padding: 2,
  },
});

export default SearchMenu;
