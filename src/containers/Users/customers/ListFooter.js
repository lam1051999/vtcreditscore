import React from 'react';
import {ActivityIndicator, View} from 'react-native';

export default function ListFooter({isLoading}) {
  return (
    <View
      style={{
        paddingVertical: 10,
        alignItems: 'center',
        height: 40,
      }}>
      {isLoading ? <ActivityIndicator size="small" color="#3ED598" /> : null}
    </View>
  );
}
