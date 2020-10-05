import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {OutlineCircleStyles as styles} from './Styles';

export default function OutlineCircle({children, width, outlineColor}) {
  return (
    <LinearGradient
      colors={outlineColor}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[
        styles.container,
        {
          width: width,
          height: width,
        },
      ]}>
      <LinearGradient
        colors={['#3C444D', '#1F2E35']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[
          styles.container,
          {
            width: width - 20,
            height: width - 20,
            backgroundColor: 'white',
          },
        ]}>
        {children}
      </LinearGradient>
    </LinearGradient>
  );
}
