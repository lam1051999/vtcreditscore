import React from 'react';
import {View, Text, Image} from 'react-native';
import {CustomersItemStyles as styles} from '../styles/Styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function CustomersItem({item}) {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() =>
        navigation.navigate('customer', {
          userDetail: item,
        })
      }>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: item.backgroundColorIcon,
          },
        ]}>
        <Image source={item.icon} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
