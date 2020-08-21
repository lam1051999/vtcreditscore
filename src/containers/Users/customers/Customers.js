import React from 'react';
import {View, Text, Button} from 'react-native';
import GradientBackground from '../../gradient-background/GradientBackground';
import {CustomersStyles as styles} from '../styles/Styles';

export default function Customers({navigation}) {
  return (
    <GradientBackground extraStyles={styles.container}>
      <Text
        style={{
          color: 'white',
        }}>
        customers
      </Text>
      <Button
        title="go customer"
        onPress={() => navigation.navigate('customer')}
      />
    </GradientBackground>
  );
}
