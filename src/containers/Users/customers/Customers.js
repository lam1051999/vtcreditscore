import React from 'react';
import {View, Text, Button, Keyboard} from 'react-native';
import GradientBackground from '../../gradient-background/GradientBackground';
import {CustomersStyles as styles} from '../styles/Styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {FAKE_DATA} from '../../../constants/Constants';
import CustomersItem from './CustomersItem';

export default function Customers({navigation}) {
  return (
    <GradientBackground extraStyles={styles.container}>
      <TouchableWithoutFeedback
        style={styles.wrapper}
        onPress={Keyboard.dismiss}>
        <View style={styles.headerContainer}>
          <View style={styles.headerSearchContainer}>
            <AntDesignIcon
              style={styles.headerSearchIcon}
              name="search1"
              color="#96A7AF"
              size={25}
            />
            <TextInput
              placeholder="Search"
              style={styles.headerTextInput}
              placeholderTextColor="#96A7AF"
            />
          </View>
          <View style={styles.headerRightIconContainer}>
            <AntDesignIcon name="bars" color="white" size={25} />
          </View>
        </View>
        <FlatList
          data={FAKE_DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CustomersItem item={item} />}
          keyExtractor={(item) => item.id + 'key'}
        />
      </TouchableWithoutFeedback>
    </GradientBackground>
  );
}
