import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function GradientBackground({extraStyles, children}) {
  return (
    <LinearGradient
      colors={['#22343C', '#1F2E35']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={extraStyles}>
      {children}
    </LinearGradient>
  );
}
