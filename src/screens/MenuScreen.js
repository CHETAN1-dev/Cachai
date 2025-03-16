import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../components/molecules/Header';
import BusinessBanner from '../components/molecules/BusinessBanner';
import SearchMenu from '../components/atoms/SearchMenu';
import CategoriesTabs from '../components/atoms/Categories';
import BusinessInfoHeader from '../components/molecules/BusinessInfoHeader';
import MenuList from '../components/molecules/MenuList';
import Checkout from '../assets/icons/MenuScreenIcon/Checkout';

export default function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    {
      id: '1',
      name: 'Dish 1',
      category: 'Empanadas',
      price: 10,
      description: 'Delicious dish',
    },
    {
      id: '2',
      name: 'Dish 2',
      category: 'Breads',
      price: 8,
      description: 'Tasty bread',
    },
    {
      id: '3',
      name: 'Dish 3',
      category: 'Dessert',
      price: 5,
      description: 'Sweet dessert',
    },
    {
      id: '4',
      name: 'Dish 4',
      category: 'Breads',
      price: 8,
      description: 'Tasty bread',
    },
    {
      id: '5',
      name: 'Dish 5',
      category: 'Breads',
      price: 8,
      description: 'Tasty bread',
    },
    {
      id: '6',
      name: 'Dish 6',
      category: 'Breads',
      price: 8,
      description: 'Tasty bread',
    },
  ];

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Cachai Po" titlecolor="white" IconColor="white" />

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled={true}
      >
        <BusinessBanner />
        <BusinessInfoHeader />
        <SearchMenu onSearch={setSearchQuery} />
        <CategoriesTabs
          categories={['All', 'Empanadas', 'Breads', 'Dessert']}
          onCategoryChange={setSelectedCategory}
        />

        <View style={styles.menuContainer}>
          <MenuList
            menuItems={filteredItems}
            selectedCategory={selectedCategory}
            onAddItem={item => setCartItems([...cartItems, item])}
            cartItems={cartItems}
          />
        </View>
      </ScrollView>

      {cartItems.length > 0 && (
        <TouchableOpacity style={styles.checkoutButton}>
          <Checkout width={350} height={80} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  menuContainer: {
    flex: 1,
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 1,
    alignSelf: 'center',
  },
});
