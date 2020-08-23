import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Customer from '../containers/Users/customer/Customer';
import Customers from '../containers/Users/customers/Customers';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="customers">
      <Stack.Screen name="customers" component={Customers} />
      <Stack.Screen name="customer" component={Customer} />
    </Stack.Navigator>
  );
}
