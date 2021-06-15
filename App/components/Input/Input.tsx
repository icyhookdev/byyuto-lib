import React from 'react';
import {TextInput} from 'react-native';
import InputWrapper from './InputWrapper';

import styles from './Input.style';
import {InputProps} from './def';

const Input: React.FunctionComponent<InputProps> = ({
  label,
  message,
  messageType,
  secureTextEntry,
  multiline,
  keyboardType = 'default',
  maxLength,
  placeholder,
}) => {
  const inputStyles = [styles.textInput];

  if (multiline) {
    inputStyles.push(styles.multiline);
  }
  return (
    <InputWrapper label={label} message={message} messageType={messageType}>
      <TextInput
        style={inputStyles}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
