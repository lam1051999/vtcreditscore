import React from 'react';
import {View, Text, Image} from 'react-native';
import {CustomersItemStyles as styles} from '../styles/Styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  BACKGROUNDCOLOR_LIST,
  FEMALE_ICONS,
  MALE_ICONS,
  UNKNOWN_ICON,
} from '../../../constants/Constants';

export default function CustomersItem({item, index}) {
  const navigation = useNavigation();
  const random_color = BACKGROUNDCOLOR_LIST[index % 3];
  let icon;
  if (item.sex) {
    if (item.sex === 'F') {
      icon = FEMALE_ICONS[index % 2];
    } else {
      icon = MALE_ICONS[index % 2];
    }
  } else {
    icon = UNKNOWN_ICON;
  }
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={() =>
        navigation.navigate('customer', {
          userDetail: item,
          icon: icon,
          random_color: random_color,
        })
      }>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: random_color,
          },
        ]}>
        <Image source={icon} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        {item.msisdn ? (
          <Text style={styles.name}>Id: {item.msisdn}</Text>
        ) : (
          <Text style={styles.name}>No ID</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
