import React from 'react';
import {View, Text} from 'react-native';
import {InputWrapperProps} from './def';

import styles from './Input.style';

const InputWrapper: React.FunctionComponent<InputWrapperProps> = ({
  children,
  label,
  message,
  messageType,
}) => {
  const messagesStyles = [styles.message];
  if (messageType) {
    messagesStyles.push(styles[messageType]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
      <Text style={messagesStyles}>{message}</Text>
    </View>
  );
};

export default InputWrapper;
