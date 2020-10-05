import React, {useCallback, useState} from 'react';
import {View, TextInput, Text, Keyboard, ActivityIndicator} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import GradientBackground from '../../gradient-background/GradientBackground';
import {CustomersStyles, CustomerStyles} from '../../Users/styles/Styles';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchScreenStyles as styles} from '../styles/Styles';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {BASE_URL} from '../../../constants/Constants';
import CustomersItem from '../../Users/customers/CustomersItem';

export default function SearchScreen({navigation}) {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  async function fetchUser() {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/users/${query}`);
      if (response.status === 200) {
        const data = await response.json();
        if (data.data.length !== 0) {
          setUser(data.data[0]);
          setIsError(false);
        } else {
          setIsError(true);
        }
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  return (
    <GradientBackground
      extraStyles={{
        flex: 1,
      }}>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.wrapper}>
        <View style={styles.headerTitleContainer}>
          <MaterialCommunityIcon
            style={[styles.headerBackIcon, CustomerStyles.backIcon]}
            name="keyboard-backspace"
            color="white"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Tìm kiếm</Text>
        </View>
        <View
          style={[
            CustomersStyles.headerContainer,
            {
              marginTop: 10,
            },
          ]}>
          <View
            style={[
              CustomersStyles.headerSearchContainer,
              styles.searchInputContainer,
            ]}>
            <AntDesignIcon
              style={CustomersStyles.headerSearchIcon}
              name="search1"
              color="#96A7AF"
              size={25}
            />
            <TextInput
              autoFocus={true}
              placeholder="Nhập id..."
              style={CustomersStyles.headerTextInput}
              placeholderTextColor="#96A7AF"
              value={query}
              onChangeText={setQuery}
            />
            {query ? (
              <FeatherIcon
                style={styles.searchInputRightIcon}
                name="delete"
                size={20}
                color="#96A7AF"
                onPress={() => setQuery('')}
              />
            ) : null}
          </View>
          <TouchableOpacity
            onPress={() => {
              if (query) fetchUser();
              else alert('Bạn phải nhập id người dùng...');
            }}
            style={styles.searchbarRightContainer}>
            <Text style={styles.searchbarRightText}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.resultStatusText}>Kết quả tìm kiếm:</Text>
        {isLoading ? (
          <ActivityIndicator size="small" color="#3ED598" />
        ) : isError ? (
          <Text style={styles.resultStatusText}>
            Id không đúng, hãy thử tìm kiếm lại
          </Text>
        ) : JSON.stringify(user) === '{}' ? null : (
          <CustomersItem item={user} index={1} />
        )}
      </TouchableWithoutFeedback>
    </GradientBackground>
  );
}
