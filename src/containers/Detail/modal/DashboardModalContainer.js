import React from 'react';
import {View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import {DashboardModalStyles as styles} from '../styles/Styles';

export default function DashboardModalContainer({children}) {
  return <Animated.View style={[styles.container]}>{children}</Animated.View>;
}
