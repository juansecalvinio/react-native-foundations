import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/Button';

export const CounterScreen = () => {
  // Ejemplo de Platform para hacer condiciones segun el sistema.
  const variant = Platform.OS === 'ios' ? 'secondary' : 'primary';

  const [counter, setCounter] = useState(10);

  const increaseCounter = () => {
    setCounter(prevState => prevState + 1);
  };

  const decreaseCounter = () => {
    setCounter(prevState => prevState - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <View style={styles.buttonsWrapper}>
        <Button text="-" variant={variant} onPress={decreaseCounter} />
        <Button text="+" variant={variant} onPress={increaseCounter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 15,
  },
});
