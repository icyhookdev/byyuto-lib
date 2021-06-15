import {TextStyle, StyleProp} from 'react-native';

export default interface TitleProps {
  title: string;
  description?: string;
  titleStyles?: StyleProp<TextStyle>;
  descriptionStyles?: StyleProp<TextStyle>;
  fontSize?: number;
  align?: string;
}
