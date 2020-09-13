import React from 'react';
import {View} from 'react-native';
import {OutlineCircleStyles as styles} from './Styles';

export default function OutlineCircle({children, width, outlineColor}) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: outlineColor,
          width: width,
          height: width,
        },
      ]}>
      <View
        style={[
          styles.container,
          {
            width: width - 20,
            height: width - 20,
            backgroundColor: 'white',
          },
        ]}>
        {children}
      </View>
    </View>
  );
}
