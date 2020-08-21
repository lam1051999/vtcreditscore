import React, {useState, useRef} from 'react';
import {View, Text, StatusBar} from 'react-native';
import GradientBackground from '../../gradient-background/GradientBackground';
import {DashboardStyles as styles} from '../styles/Styles';
import {BarChart} from 'react-native-chart-kit';
import {
  BARCHART_WIDTH,
  BARCHART_HEIGHT,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  BOTTOMTAB_HEIGHT,
} from '../../../constants/Constants';
import {
  ScrollView,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';
import UserModalContainer from '../../Users/modal/UserModalContainer';
import {CustomerStyles} from '../../Users/styles/Styles';
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
import runSpring from '../../../animation-config/runSpring';

export default function Dashboard() {
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
    outputRange: [-SCREEN_HEIGHT, 0],
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
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#22343C',
    backgroundGradientFromOpacity: 0.5,
    backgroundGradientTo: '#1F2E35',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    barPercentage: 1,
  };

  return (
    <GradientBackground extraStyles={styles.container}>
      <View style={{height: BARCHART_HEIGHT}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BarChart
            data={data}
            width={BARCHART_WIDTH}
            height={BARCHART_HEIGHT}
            yAxisLabel="$"
            chartConfig={chartConfig}
            fromZero={true}
            horizontalLabelRotation={-10}
            showValuesOnTopOfBars={true}
            yLabelsOffset={10}
            verticalLabelRotation={0}
          />
        </ScrollView>
      </View>
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
          <Text>open modal</Text>
        </Animated.View>
      </TapGestureHandler>
      <Animated.View
        style={[
          CustomerStyles.backView,
          {
            zIndex: _backViewZIndex,
            opacity: _backViewOpacity,
          },
        ]}
      />
      <UserModalContainer
        width={SCREEN_WIDTH - 40}
        height={
          SCREEN_HEIGHT - StatusBar.currentHeight - (BOTTOMTAB_HEIGHT + 10) * 2
        }
        marginHorizontal={20}
        marginTop={BOTTOMTAB_HEIGHT - 20}
        _translateModalY={_translateModalY}>
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
