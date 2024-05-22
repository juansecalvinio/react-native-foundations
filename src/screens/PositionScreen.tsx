import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28c4d9',
    width: 400,
    height: 400,
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#ffffff',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
