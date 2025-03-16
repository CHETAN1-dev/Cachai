import React, { useEffect, useRef } from 'react';
import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './src/components/NavBar/NavBar';

// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Main" component={BottomTabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
export const navigationRef = createNavigationContainerRef();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
