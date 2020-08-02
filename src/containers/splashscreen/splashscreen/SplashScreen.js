import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SplashScreenStyles as styles} from '../styles/Styles';
import Animated, {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
  Easing,
  interpolate,
} from 'react-native-reanimated';

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 500,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(
      clockRunning(clock),
      [
        // if the clock is already running we update the toValue, in case a new dest has been passed in
        set(config.toValue, dest),
      ],
      [
        // if the clock isn't running we reset all the animation params and start the clock
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock),
      ],
    ),
    // we run the step here that is going to update position
    timing(clock, state, config),
    // if the animation is over we stop the clock
    cond(state.finished, debug('stop clock', stopClock(clock))),
    // we made the block return the updated position
    state.position,
  ]);
}

export default function SplashScreen() {
  const _scale = runTiming(new Clock(), 0.5, 1);
  const _opacity = interpolate(_scale, {
    inputRange: [0.5, 1],
    outputRange: [0, 1],
  });

  return (
    <LinearGradient
      colors={['#22343C', '#1F2E35']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
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
        Strengthen your purse, power your bussiness, buy you a dream life
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
    </LinearGradient>
  );
}
