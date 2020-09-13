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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OutlineCircle from '../../../components/OutlineCircle';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientAnimted = Animated.createAnimatedComponent(LinearGradient);

function getColor(value) {
  if (0 <= value && value <= 0.15)
    return {
      color: '#129E02',
      label: 'Rủi ro rất thấp',
      detail: 'Lãi suất cho vay ưu đãi, cho phép vay quá hạn dưới 90 ngày',
    };
  else if (0.15 < value && value <= 0.3)
    return {
      color: '#85CA00',
      label: 'Rủi ro thấp',
      detail: 'Lãi suất cho vay ưu đãi, cho phép vay quá hạn dưới 30 ngày',
    };
  else if (0.3 < value && value <= 0.5)
    return {
      color: '#F5D901',
      label: 'Rủi ro dưới trung bình',
      detail: 'Lãi suất cho vay tiêu chuẩn, không cho phép vay quá hạn',
    };
  else if (0.5 < value && value <= 0.7)
    return {
      color: '#F16601',
      label: 'Rủi ro trung bình',
      detail: 'Lãi suất cho vay tiêu chuấn, cho vay tối đa 200 triệu',
    };
  else if (0.7 < value && value <= 0.85)
    return {
      color: '#e64a19',
      label: 'Rủi ro cao',
      detail:
        'Lãi suất cho vay cao, cho vay tối đa 50 triệu, không cho phép vay quá hạn',
    };
  else if (0.85 < value && value <= 1)
    return {
      color: '#dd2c00',
      label: 'Rủi ro rất cao',
      detail: 'Không đủ điều kiện cho vay',
    };
}
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
  let label_detail = getColor(userDetail.label);

  return (
    <GradientBackground extraStyles={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
        }}>
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
            <AnimatedCircularProgress
              size={(SCREEN_WIDTH - 30) / 3}
              width={15}
              fill={userDetail.label * 100}
              tintColor={label_detail.color}
              backgroundColor="#3d5875">
              {(fill) => (
                <Text style={{color: 'white'}}>
                  {(userDetail.label * 100).toFixed(2)} %
                </Text>
              )}
            </AnimatedCircularProgress>
            <View
              style={[
                styles.chartDetail,
                {width: ((SCREEN_WIDTH - 30) * 2) / 3 - 10},
              ]}>
              <Text style={styles.labelChartLabel}>
                <Text style={styles.labelChart}> Xác suất rủi ro:</Text>{' '}
                {userDetail.label.toFixed(5)}
              </Text>
              <Text style={styles.labelChartLabel}>
                <Text style={styles.labelChart}> Phân loại:</Text>{' '}
                {label_detail.label}
              </Text>
              <Text numberOfLines={5} style={styles.labelChartDetail}>
                <Text style={styles.labelChart}> Mô tả:</Text>{' '}
                {label_detail.detail}
              </Text>
            </View>
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
                <OutlineCircle
                  outlineColor={['#ee0979', '#ff6a00']}
                  width={modalHeight / 3.5}>
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
                    outlineColor={['#1D976C', '#93F9B9']}
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
                    outlineColor={['#FDC830', '#F37335']}
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
                <LinearGradientAnimted
                  colors={['#F27A54', '#A154F2']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.backButtonContainer}>
                  <Text style={styles.backText}>Trở về</Text>
                </LinearGradientAnimted>
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
                      outlineColor={['#ee0979', '#ff6a00']}
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
                      outlineColor={['#1D976C', '#93F9B9']}
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
                      outlineColor={['#FDC830', '#F37335']}
                      width={modalHeight / 4.5}>
                      <Text style={styles.people}>
                        {userDetail.trade_re ? userDetail.trade_re : 0}{' '}
                      </Text>
                      <Text style={styles.peopleLabel}>Lần nạp</Text>
                    </OutlineCircle>
                  </View>
                  <View style={styles.peopleContainer}>
                    <OutlineCircle
                      outlineColor={['#7F00FF', '#E100FF']}
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
                <LinearGradientAnimted
                  colors={['#F27A54', '#A154F2']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.backButtonContainer}>
                  <Text style={styles.backText}>Trở về</Text>
                </LinearGradientAnimted>
              </TapGestureHandler>
            </View>
          </UserModalContainer>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
