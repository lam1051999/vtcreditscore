import React from 'react';
import {View, Text, Image} from 'react-native';
import {CustomersItemStyles as styles} from '../styles/Styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  FEMALE_ICONS,
  MALE_ICONS,
  UNKNOWN_ICON,
} from '../../../constants/Constants';

function getColor(value) {
  if (0 <= value && value <= 0.15) return '#129E02';
  else if (0.15 < value && value <= 0.3) return '#85CA00';
  else if (0.3 < value && value <= 0.5) return '#F5D901';
  else if (0.5 < value && value <= 0.7) return '#F16601';
  else if (0.7 < value && value <= 0.85) return '#e64a19';
  else if (0.85 < value && value <= 1) return '#dd2c00';
}

export default function CustomersItem({item, index}) {
  const navigation = useNavigation();
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
          random_color: getColor(item.label),
        })
      }>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: getColor(item.label),
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
