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
import OutlineCircle from '../../../components/OutlineCircle';

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

export default function Customer({navigation, route}) {
  const modalHeight = SCREEN_HEIGHT - StatusBar.currentHeight - 120;
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
  const {userDetail, icon, random_color} = route.params;

  return (
    <GradientBackground extraStyles={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: SCREEN_HEIGHT}}>
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
              <View
                style={[
                  styles.imageContainer,
                  {
                    backgroundColor: random_color,
                  },
                ]}>
                <Image style={styles.image} source={icon} resizeMode="cover" />
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoId}>
                Id: {userDetail.msisdn ? userDetail.msisdn : 'Unknown'}
              </Text>
              <Text style={styles.name}>
                Năm sinh: {userDetail.born_in ? userDetail.born_in : 'Unknown'}
              </Text>
            </View>
          </View>
          <View style={styles.phoneContainer}>
            <View style={styles.flagContainer}>
              <Image
                source={require('../../../assets/vnflag.png')}
                resizeMode="cover"
                style={styles.vnflag}
              />
              <Text style={styles.phonePrefix}>Mã tỉnh</Text>
            </View>
            <Text style={styles.phoneSuffix}>
              {userDetail.ZIP_CODE ? userDetail.ZIP_CODE : 'Unknown'}
            </Text>
          </View>
          <View style={styles.ageContainer}>
            <AntDesignIcon name="user" color="#96A7AF" size={25} />
            <Text style={styles.label}>Tuổi</Text>
            <Text style={styles.label}>
              {userDetail.age ? userDetail.age : 'Unknow'}
            </Text>
          </View>
          <View style={styles.ageContainer}>
            <FontAwesome5Icon name="transgender" size={25} color="#96A7AF" />
            <Text style={styles.label}>Giới tính</Text>
            <Text
              numberOfLines={2}
              style={[
                styles.label,
                {
                  width: SCREEN_WIDTH - 200,
                },
              ]}>
              {userDetail.sex
                ? userDetail.sex === 'F'
                  ? 'Nữ'
                  : 'Nam'
                : 'Unknown'}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Credit Score</Text>
            {/* <PieChart
              data={userDetail.credit_scores}
              width={300}
              height={200}
              chartConfig={chartConfig}
              accessor="value"
              paddingLeft={20}
              style={{
                marginTop: 10,
              }}
            /> */}
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
            height={modalHeight}
            marginHorizontal={30}
            marginTop={60}>
            <View style={styles.mobileModalContainer}>
              <Text style={styles.topTitle}>Thông tin cước di động</Text>
              <View style={styles.dataContainer}>
                <Text style={styles.dataTitle}>Lượng dữ liệu đã sử dụng</Text>
                <Text style={styles.subData}>
                  {userDetail.sum_uploaddata ? userDetail.sum_uploaddata : 0}{' '}
                  Bytes
                </Text>
                <OutlineCircle outlineColor="#3ED598" width={modalHeight / 3.5}>
                  <Text style={styles.data}>
                    {userDetail.sum_uploaddata
                      ? (userDetail.sum_uploaddata / Math.pow(1024, 3)).toFixed(
                          2,
                        )
                      : 0}
                  </Text>
                  <Text style={styles.dataLabel}>GB</Text>
                </OutlineCircle>
              </View>
              <View style={styles.subSectionContainer}>
                <View style={styles.peopleContainer}>
                  <Text style={styles.peopleTitle}>Số người đã liên lạc</Text>
                  <OutlineCircle
                    outlineColor="#FF565E"
                    width={modalHeight / 4.5}>
                    <Text style={styles.people}>
                      {userDetail.PARTNER_MSISDN
                        ? userDetail.PARTNER_MSISDN
                        : 0}
                    </Text>
                    <Text style={styles.peopleLabel}>Người</Text>
                  </OutlineCircle>
                </View>
                <View style={styles.peopleContainer}>
                  <Text style={styles.peopleTitle}>Số tiền nạp dịch vụ</Text>
                  <OutlineCircle
                    outlineColor="#FFC542"
                    width={modalHeight / 4.5}>
                    <Text style={styles.people}>
                      {userDetail.sum_re ? userDetail.sum_re / 1000 : 0}K
                    </Text>
                    <Text style={styles.peopleLabel}>VNĐ</Text>
                  </OutlineCircle>
                </View>
              </View>
              <TapGestureHandler
                onGestureEvent={_backTapStateGestureEvent}
                onHandlerStateChange={_backTapStateGestureEvent}>
                <Animated.View style={styles.backButtonContainer}>
                  <Text style={styles.backText}>Trở về</Text>
                </Animated.View>
              </TapGestureHandler>
            </View>
          </UserModalContainer>
          {/* Thông tin giao dịch modal */}
          <UserModalContainer
            _translateModalY={_translateModalYTrade}
            width={SCREEN_WIDTH - 60}
            height={modalHeight}
            marginHorizontal={30}
            marginTop={60}>
            <View style={styles.mobileModalContainer}>
              <Text style={styles.topTitle}>Thông tin giao dịch</Text>
              <View>
                <Text style={styles.top2Title}>Thông tin tài chính</Text>
                <View style={styles.subSectionContainer}>
                  <View style={styles.peopleContainer}>
                    <OutlineCircle
                      outlineColor="#3ED598"
                      width={modalHeight / 4.5}>
                      <Text style={styles.people}>
                        {userDetail.mon_pos ? userDetail.mon_pos / 1000000 : 0}{' '}
                        Tr{' '}
                      </Text>
                      <Text style={styles.peopleLabel}>VNĐ đã trả</Text>
                    </OutlineCircle>
                  </View>
                  <View style={styles.peopleContainer}>
                    <OutlineCircle
                      outlineColor="#FF565E"
                      width={modalHeight / 4.5}>
                      <Text style={styles.people}>
                        {userDetail.mon_neg ? -userDetail.mon_neg / 1000000 : 0}{' '}
                        Tr{' '}
                      </Text>
                      <Text style={styles.peopleLabel}>VNĐ vay</Text>
                    </OutlineCircle>
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.top2Title}>Thông tin số giao dịch</Text>
                <View style={styles.subSectionContainer}>
                  <View style={styles.peopleContainer}>
                    <OutlineCircle
                      outlineColor="#9575cd"
                      width={modalHeight / 4.5}>
                      <Text style={styles.people}>
                        {userDetail.trade_re ? userDetail.trade_re : 0}{' '}
                      </Text>
                      <Text style={styles.peopleLabel}>Lần nạp</Text>
                    </OutlineCircle>
                  </View>
                  <View style={styles.peopleContainer}>
                    <OutlineCircle
                      outlineColor="#ffa726"
                      width={modalHeight / 4.5}>
                      <Text style={styles.people}>
                        {userDetail.trade_lo ? userDetail.trade_lo : 0}{' '}
                      </Text>
                      <Text style={styles.peopleLabel}>Lần mượn</Text>
                    </OutlineCircle>
                  </View>
                </View>
              </View>
              <Text
                style={[
                  styles.peopleLabel,
                  {
                    marginTop: 10,
                  },
                ]}>
                Số giao dịch dịch vụ:{' '}
                {userDetail.trade_ser ? userDetail.trade_ser : 0} lần giao dịch
              </Text>
              <TapGestureHandler
                onGestureEvent={_backTapTradeStateGestureEvent}
                onHandlerStateChange={_backTapTradeStateGestureEvent}>
                <Animated.View style={styles.backButtonContainer}>
                  <Text style={styles.backText}>Trở về</Text>
                </Animated.View>
              </TapGestureHandler>
            </View>
          </UserModalContainer>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
