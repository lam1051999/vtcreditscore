import React from 'react';
import {UserModalStyles as styles} from '../styles/Styles';
import Animated from 'react-native-reanimated';

export default function UserModalContainer({
  children,
  _translateModalY,
  width,
  height,
  marginHorizontal,
  marginTop,
}) {
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: _translateModalY,
            },
          ],
          width: width,
          height: height,
          marginHorizontal: marginHorizontal,
          marginTop: marginTop,
        },
      ]}>
      {children}
    </Animated.View>
  );
}
