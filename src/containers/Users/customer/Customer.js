import React, {useRef} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import GradientBackground from '../../gradient-background/GradientBackground';
import {CustomerStyles as styles} from '../styles/Styles';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {
  Value,
  event,
  useCode,
  cond,
  eq,
  SpringUtils,
  set,
  interpolate,
} from 'react-native-reanimated';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../constants/Constants';
import UserModalContainer from '../modal/UserModalContainer';
import runSpring from '../../../animation-config/runSpring';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Customer({navigation}) {
  const _tapState = useRef(new Value(State.UNDETERMINED)).current;
  const _backTapState = useRef(new Value(State.UNDETERMINED)).current;
  const _isOpen = useRef(new Value(0)).current;
  const _springIsOpen = runSpring(_isOpen, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: 20,
  });
  const _translateModalY = interpolate(_springIsOpen, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT, 0],
  });
  const _backViewZIndex = interpolate(_springIsOpen, {
    inputRange: [0, 1],
    outputRange: [-1, 2],
  });
  const _backViewOpacity = interpolate(_springIsOpen, {
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });
  const _tapGestureEvent = event([
    {
      nativeEvent: {
        state: _tapState,
      },
    },
  ]);
  const _backTapStateGestureEvent = event([
    {
      nativeEvent: {
        state: _backTapState,
      },
    },
  ]);
  useCode(() => [cond(eq(_tapState, State.END), set(_isOpen, 1))], [_tapState]);
  useCode(() => [cond(eq(_backTapState, State.END), set(_isOpen, 0))], [
    _backTapState,
  ]);

  return (
    <GradientBackground extraStyles={styles.container}>
      <MaterialCommunityIcon
        name="keyboard-backspace"
        color="white"
        size={25}
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      />
      <Text
        style={{
          color: 'white',
        }}>
        customer
      </Text>
      <TapGestureHandler
        onGestureEvent={_tapGestureEvent}
        onHandlerStateChange={_tapGestureEvent}>
        <Animated.View
          style={{
            backgroundColor: '#64b5f6',
            width: SCREEN_WIDTH - 20,
            marginHorizontal: 10,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>show modal</Text>
        </Animated.View>
      </TapGestureHandler>
      <Animated.View
        style={[
          styles.backView,
          {
            zIndex: _backViewZIndex,
            opacity: _backViewOpacity,
          },
        ]}
      />
      <UserModalContainer
        _translateModalY={_translateModalY}
        width={SCREEN_WIDTH - 60}
        height={SCREEN_HEIGHT - StatusBar.currentHeight - 60}
        marginHorizontal={30}
        marginTop={30}>
        <Text>user modal</Text>
        <TapGestureHandler
          onGestureEvent={_backTapStateGestureEvent}
          onHandlerStateChange={_backTapStateGestureEvent}>
          <Animated.View
            style={{
              backgroundColor: '#64b5f6',
              width: 250,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Back</Text>
          </Animated.View>
        </TapGestureHandler>
      </UserModalContainer>
    </GradientBackground>
  );
}
