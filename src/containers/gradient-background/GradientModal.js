import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function GradientModal({children}) {
  return (
    <LinearGradient
      colors={['#3C444D', '#1F2E35']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 10,
      }}>
      {children}
    </LinearGradient>
  );
}
