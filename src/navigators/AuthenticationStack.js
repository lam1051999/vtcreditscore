import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignIn from '../containers/authentication/signin/SignIn';

const Stack = createStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="Signin" component={SignIn} />
    </Stack.Navigator>
  );
}
