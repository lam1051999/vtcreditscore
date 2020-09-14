import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import GradientBackground from '../../gradient-background/GradientBackground';
import {CustomersStyles as styles} from '../styles/Styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {BASE_URL} from '../../../constants/Constants';
import CustomersItem from './CustomersItem';
import ListFooter from './ListFooter';
import {useFocusEffect} from '@react-navigation/native';

export default function Customers({navigation}) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pageNumber, setPageNumber] = useState(2);
  async function fetchData(page) {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/api/users?page=${page}&limit=10`,
      );
      if (response.status === 200) {
        const data = await response.json();
        if (data.data.length !== 0) {
          setUsers((prevState) => [...prevState, ...data.data]);
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
  async function fetchData1() {
    setPageNumber(2);
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/users?page=1&limit=10`);
      if (response.status === 200) {
        const data = await response.json();
        if (data.data.length !== 0) {
          setUsers(data.data);
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
  useFocusEffect(
    useCallback(() => {
      fetchData1();
    }, []),
  );
  return (
    <GradientBackground extraStyles={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('search')}
        style={styles.headerContainer}>
        <View style={styles.headerSearchContainer}>
          <AntDesignIcon
            style={styles.headerSearchIcon}
            name="search1"
            color="#96A7AF"
            size={25}
          />
          <View style={styles.headerFakeInput}>
            <Text style={styles.headerFakeTextInput}>Nhập id...</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {isError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>There is some errors happened</Text>
          <TouchableOpacity
            style={styles.errorButtonContainer}
            onPress={() => fetchData(pageNumber)}>
            <Text style={styles.errorButtonText}>Try again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          ListFooterComponent={<ListFooter isLoading={isLoading} />}
          data={users}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <CustomersItem item={item} index={index} />
          )}
          keyExtractor={(item) => item._id + 'key'}
          onEndReached={() => {
            setPageNumber((prevState) => prevState + 1);
            fetchData(pageNumber);
          }}
          onEndReachedThreshold={0.1}
        />
      )}
    </GradientBackground>
  );
}
