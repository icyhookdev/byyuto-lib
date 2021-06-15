import {KeyboardTypeOptions} from 'react-native';

export interface InputProps {
  onChange?: () => void;
  label?: string;
  message?: string;
  placeholder?: string;
  messageType?: 'error' | 'warning' | 'success';
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  multiline?: boolean;
  secureTextEntry?: boolean;
  textInputStyles?: object;
}

export interface InputWrapperProps {
  label?: string;
  message?: string;
  messageType?: string;
  children: React.ReactNode;
}
