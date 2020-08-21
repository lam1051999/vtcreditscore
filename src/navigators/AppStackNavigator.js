import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Customer from '../containers/Users/customer/Customer';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="tabs">
      <Stack.Screen name="tabs" component={BottomTabNavigator} />
      <Stack.Screen name="customer" component={Customer} />
    </Stack.Navigator>
  );
}
