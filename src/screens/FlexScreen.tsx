import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.caja1]}>Caja 1</Text>
      <Text style={[styles.box, styles.caja2]}>Caja 2</Text>
      <Text style={[styles.box, styles.caja3]}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  box: {
    borderWidth: 2,
    borderColor: '#ffffff',
    fontSize: 30,
    padding: 10,
  },
  caja1: {
    flex: 2,
  },
  caja2: {
    flex: 1,
  },
  caja3: {},
});
