import React from 'react';
import {Text, View} from 'react-native';

export const HelloWorldScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 48,
          fontWeight: 'bold',
        }}>
        Hello World
      </Text>
    </View>
  );
};
