import {TextStyle, StyleProp, ViewStyle} from 'react-native';

type typeValues = 'solid' | 'clear' | 'outline';

type iconAligment = 'left' | 'right';

export default interface ButtonProps {
  onPress?: () => void;
  icon?: () => React.ReactNode;
  children: React.ReactNode;
  buttonContainerStyles?: StyleProp<ViewStyle>;
  buttonTextStyles?: StyleProp<TextStyle>;
  iconContainerStyles?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
  type: typeValues;
  iconPosition: iconAligment;
  loadingColor: string;
  loadingSize: string;
}
