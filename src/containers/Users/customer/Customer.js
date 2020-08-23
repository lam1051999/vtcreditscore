import React, {useRef} from 'react';
import {View, Text, Button, StatusBar, Image} from 'react-native';
import GradientBackground from '../../gradient-background/GradientBackground';
import {CustomerStyles as styles} from '../styles/Styles';
import {
  TapGestureHandler,
  State,
  ScrollView,
} from 'react-native-gesture-handler';
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
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {PieChart} from 'react-native-chart-kit';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

export default function Customer({navigation, route}) {
  const _tapState = useRef(new Value(State.UNDETERMINED)).current;
  const _backTapState = useRef(new Value(State.UNDETERMINED)).current;
  const _tapTradeState = useRef(new Value(State.UNDETERMINED)).current;
  const _backTapTradeState = useRef(new Value(State.UNDETERMINED)).current;
  const _isOpen = useRef(new Value(0)).current;
  const _springIsOpen = runSpring(_isOpen, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: 20,
  });
  const _isOpenTrade = useRef(new Value(0)).current;
  const _springIsOpenTrade = runSpring(_isOpenTrade, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: 20,
  });
  const _translateModalY = interpolate(_springIsOpen, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT + 50, 0],
  });
  const _backViewZIndex = interpolate(_springIsOpen, {
    inputRange: [0, 1],
    outputRange: [-1, 2],
  });
  const _backViewOpacity = interpolate(_springIsOpen, {
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });
  const _translateModalYTrade = interpolate(_springIsOpenTrade, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT + 50, 0],
  });
  const _backViewZIndexTrade = interpolate(_springIsOpenTrade, {
    inputRange: [0, 1],
    outputRange: [-1, 2],
  });
  const _backViewOpacityTrade = interpolate(_springIsOpenTrade, {
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
  const _tapTradeGestureEvent = event([
    {
      nativeEvent: {
        state: _tapTradeState,
      },
    },
  ]);
  const _backTapTradeStateGestureEvent = event([
    {
      nativeEvent: {
        state: _backTapTradeState,
      },
    },
  ]);
  useCode(() => [cond(eq(_tapState, State.END), set(_isOpen, 1))], [_tapState]);
  useCode(() => [cond(eq(_backTapState, State.END), set(_isOpen, 0))], [
    _backTapState,
  ]);
  useCode(() => [cond(eq(_tapTradeState, State.END), set(_isOpenTrade, 1))], [
    _tapTradeState,
  ]);
  useCode(
    () => [cond(eq(_backTapTradeState, State.END), set(_isOpenTrade, 0))],
    [_backTapTradeState],
  );
  const {userDetail} = route.params;

  return (
    <GradientBackground extraStyles={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <MaterialCommunityIcon
            name="keyboard-backspace"
            color="white"
            size={25}
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.nameContainer}>
            <View style={styles.imageOutterContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={userDetail.icon}
                  resizeMode="cover"
                />
              </View>
            </View>
            <Text style={styles.name}>{userDetail.name}</Text>
          </View>
          <View style={styles.phoneContainer}>
            <View style={styles.flagContainer}>
              <Image
                source={require('../../../assets/vnflag.png')}
                resizeMode="cover"
                style={styles.vnflag}
              />
              <Text style={styles.phonePrefix}>+84</Text>
            </View>
            <Text style={styles.phoneSuffix}>{userDetail.phone.slice(1)}</Text>
          </View>
          <View style={styles.ageContainer}>
            <AntDesignIcon name="user" color="#96A7AF" size={25} />
            <Text style={styles.label}>Age</Text>
            <Text style={styles.label}>{userDetail.age}</Text>
          </View>
          <View style={styles.ageContainer}>
            <FontAwesome5Icon name="building" size={25} color="#96A7AF" />
            <Text style={styles.label}>Address</Text>
            <Text
              numberOfLines={2}
              style={[
                styles.label,
                {
                  width: SCREEN_WIDTH - 200,
                },
              ]}>
              {userDetail.address}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Credit Score</Text>
            <PieChart
              data={userDetail.credit_scores}
              width={300}
              height={200}
              chartConfig={chartConfig}
              accessor="value"
              paddingLeft={20}
              style={{
                marginTop: 10,
              }}
            />
          </View>
          {/* tap cước di động */}
          <TapGestureHandler
            onGestureEvent={_tapGestureEvent}
            onHandlerStateChange={_tapGestureEvent}>
            <Animated.View style={styles.mobileFeeContainer}>
              <View style={styles.mobileFeeIconContainer}>
                <MaterialIcons name="attach-money" size={25} color="#30444E" />
              </View>
              <Text style={styles.mobileFeeText}>Cước di động</Text>
              <Ionicons name="caret-forward-sharp" color="#3DD598" size={25} />
            </Animated.View>
          </TapGestureHandler>
          {/* tap thông tin giao dịch */}
          <TapGestureHandler
            onGestureEvent={_tapTradeGestureEvent}
            onHandlerStateChange={_tapTradeGestureEvent}>
            <Animated.View
              style={[
                styles.mobileFeeContainer,
                {
                  marginBottom: 20,
                },
              ]}>
              <View style={styles.mobileFeeIconContainer}>
                <AntDesignIcon name="areachart" size={25} color="#30444E" />
              </View>
              <Text style={styles.mobileFeeText}>Thông tin giao dịch</Text>
              <Ionicons name="caret-forward-sharp" color="#3DD598" size={25} />
            </Animated.View>
          </TapGestureHandler>
          {/* backview cước di động */}
          <Animated.View
            style={[
              styles.backView,
              {
                zIndex: _backViewZIndex,
                opacity: _backViewOpacity,
              },
            ]}
          />
          {/* backview thông tin giao dịch */}
          <Animated.View
            style={[
              styles.backView,
              {
                zIndex: _backViewZIndexTrade,
                opacity: _backViewOpacityTrade,
              },
            ]}
          />
          {/* Cước di động modal */}
          <UserModalContainer
            _translateModalY={_translateModalY}
            width={SCREEN_WIDTH - 60}
            height={SCREEN_HEIGHT - StatusBar.currentHeight - 120}
            marginHorizontal={30}
            marginTop={60}>
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
          {/* Thông tin giao dịch modal */}
          <UserModalContainer
            _translateModalY={_translateModalYTrade}
            width={SCREEN_WIDTH - 60}
            height={SCREEN_HEIGHT - StatusBar.currentHeight - 120}
            marginHorizontal={30}
            marginTop={60}>
            <Text>trade modal</Text>
            <TapGestureHandler
              onGestureEvent={_backTapTradeStateGestureEvent}
              onHandlerStateChange={_backTapTradeStateGestureEvent}>
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
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
