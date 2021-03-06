import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {SplashScreenStyles as styles} from '../styles/Styles';
import Animated, {Clock, interpolate} from 'react-native-reanimated';
import GradientBackground from '../../gradient-background/GradientBackground';
import runTiming from '../../../animation-config/runTiming';

export default function SplashScreen() {
  const _scale = runTiming(new Clock(), 0.5, 1, 500);
  const _opacity = interpolate(_scale, {
    inputRange: [0.5, 1],
    outputRange: [0, 1],
  });

  return (
    <GradientBackground extraStyles={styles.container}>
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: _opacity,
          },
        ]}>
        Credit Scoring
      </Animated.Text>
      <Animated.Text
        style={[
          styles.slogan,
          {
            opacity: _opacity,
          },
        ]}
        numberOfLines={2}>
        Fast, accurate, reliable evaluation
      </Animated.Text>
      <Animated.Image
        resizeMode="cover"
        source={require('../../../assets/splashscreen.png')}
        style={[
          styles.image,
          {
            transform: [
              {
                scale: _scale,
              },
            ],
          },
        ]}
      />
      <ActivityIndicator
        size="large"
        color="#40DF9F"
        style={{
          marginTop: 60,
        }}
      />
      <View style={styles.empty} />
      <Animated.Text
        style={[
          styles.team,
          {
            opacity: _opacity,
          },
        ]}>
        Powered by Học Sinh Giỏi
      </Animated.Text>
    </GradientBackground>
  );
}
