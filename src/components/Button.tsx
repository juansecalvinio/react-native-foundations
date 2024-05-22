import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Button.styles';

interface Props {
  text?: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
}

export const Button = ({text, variant = 'primary', onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.button,
          variant === 'primary' ? styles.primary : styles.secondary,
        ]}>
        <Text
          style={[
            styles.text,
            variant === 'primary' ? styles.textPrimary : styles.textSecondary,
          ]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
