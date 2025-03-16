import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from '../../assets/icons/NavBarIcon/hom';
import PromotionIcon from '../../assets/icons/NavBarIcon/promotion';
import ReorderIcon from '../../assets/icons/NavBarIcon/reOder';
import FavouriteIcon from '../../assets/icons/NavBarIcon/favourite';
import MoreIcon from '../../assets/icons/NavBarIcon/more';

import Favorite from '../../screens/Favourite';
import Reoder from '../../screens/Reoder';
import Promotion from '../../screens/Promotion';
import More from '../../screens/More';
import HomeStack from '../../screens/HomeStack';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const screenOptions = ({route}) => ({
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({focused, size}) => {
      const icons = {
        Home: HomeIcon,
        Reorder: ReorderIcon,
        Favourite: FavouriteIcon,
        Promotions: PromotionIcon,
        More: MoreIcon,
      };

      const IconComponent = icons[route.name];

      return <IconComponent color="white" />;
    },
    tabBarActiveTintColor: 'black',
    tabBarStyle: {
      backgroundColor: '#FF6600',
      height: 60,
      borderTopWidth: 1,
      borderTopColor: 'black',
    },
    tabBarLabelStyle: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    headerShown: false,
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Promotions" component={Promotion} />
      <Tab.Screen name="Reorder" component={Reoder} />
      <Tab.Screen name="Favourite" component={Favorite} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
