import React, {useCallback, useRef, useState} from 'react';
import {View, Text, Keyboard, StatusBar} from 'react-native';
import {SignInStyles as styles} from '../styles/Styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {useFocusEffect} from '@react-navigation/native';
import Animated, {
  spring,
  Value,
  SpringUtils,
  interpolate,
} from 'react-native-reanimated';
import {
  SIGN_IN_LAYOUT_HEIGHT,
  SCREEN_HEIGHT,
} from '../../../constants/Constants';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

export default function SignIn() {
  const _translateY = useRef(new Value(0)).current;
  const [showPassword, setShowPassword] = useState(false);
  function _keyboardDidShow(evt) {
    spring(_translateY, {
      ...SpringUtils.makeDefaultConfig(),
      overshootClamping: true,
      damping: 25,
      stiffness: 200,
      toValue:
        SCREEN_HEIGHT -
        StatusBar.currentHeight -
        SIGN_IN_LAYOUT_HEIGHT -
        evt.endCoordinates.height -
        10,
    }).start();
  }
  function _keyboardDidHide() {
    spring(_translateY, {
      ...SpringUtils.makeDefaultConfig(),
      overshootClamping: true,
      damping: 25,
      stiffness: 200,
      toValue: 0,
    }).start();
  }
  useFocusEffect(
    useCallback(() => {
      Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
      return () => {
        Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
      };
    }, []),
  );
  const _scale = interpolate(_translateY, {
    inputRange: [-115, 0],
    outputRange: [0.55, 1],
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.wrapper}>
        <Animated.Image
          source={require('../../../assets/signin.png')}
          style={[
            styles.image,
            {
              transform: [
                {
                  scale: _scale,
                },
                {
                  translateY: _translateY,
                },
                {
                  perspective: 1000,
                },
              ],
            },
          ]}
          resizeMode="cover"
        />
        <Animated.View
          style={[
            styles.detailWrapper,
            {
              transform: [
                {
                  translateY: _translateY,
                },
                {
                  perspective: 1000,
                },
              ],
            },
          ]}>
          <Text style={styles.welcomeText}>Wellcome!</Text>
          <View style={styles.textInputContainer}>
            <View style={styles.textInputIconContainer}>
              <AntDesignIcon name="user" size={20} color="#F9BF3D" />
            </View>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholderTextColor="#828D92"
              placeholder="username"
            />
          </View>
          <View style={[styles.textInputContainer, {position: 'relative'}]}>
            <View style={styles.textInputIconContainer}>
              <FontistoIcon name="locked" size={20} color="#FF575F" />
            </View>
            <TextInput
              style={[styles.textInput, {paddingRight: 35}]}
              autoCapitalize="none"
              placeholderTextColor="#828D92"
              placeholder="password"
              secureTextEntry={!showPassword}
            />
            {showPassword ? (
              <IoniconsIcon
                name="ios-eye"
                size={25}
                color="#828D92"
                onPress={() => setShowPassword(false)}
                style={styles.showHideIcon}
              />
            ) : (
              <IoniconsIcon
                name="ios-eye-off"
                size={25}
                color="#828D92"
                onPress={() => setShowPassword(true)}
                style={styles.showHideIcon}
              />
            )}
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign in</Text>
            <AntDesignIcon name="arrowright" size={25} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
