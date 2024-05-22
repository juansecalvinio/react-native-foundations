import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderColor: '#222222',
    borderStyle: 'solid',
    borderRadius: 50,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100,
  },
  primary: {
    backgroundColor: '#222222',
    borderWidth: 1,
  },
  secondary: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: '#ffffff',
  },
  textSecondary: {
    color: '#222222',
  },
});
