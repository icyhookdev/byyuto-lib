import {TextStyle, StyleProp, ViewStyle} from 'react-native';

export default interface SwipeButtonProps {
  handleComplete?: () => void;
  icon?: () => React.ReactNode;
  textStyles?: StyleProp<TextStyle>;
  ButtonStyles?: StyleProp<ViewStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  animationColors: string[];
  text: string;
}
