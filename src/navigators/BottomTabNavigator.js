import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Customers from '../containers/Users/customers/Customers';
import Dashboard from '../containers/Detail/dashboard/Dashboard';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BOTTOMTAB_HEIGHT} from '../constants/Constants';

const Tabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Customer') {
            return <AntDesignIcon name="user" size={25} color={color} />;
          } else if (route.name === 'Dashboard') {
            return (
              <MaterialCommunityIcon
                name="desktop-mac-dashboard"
                size={25}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#64b5f6',
        inactiveTintColor: 'white',
        showLabel: false,
        style: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          height: BOTTOMTAB_HEIGHT,
        },
      }}
      initialRouteName="Customer">
      <Tabs.Screen name="Customer" component={Customers} />
      <Tabs.Screen name="Dashboard" component={Dashboard} />
    </Tabs.Navigator>
  );
}
