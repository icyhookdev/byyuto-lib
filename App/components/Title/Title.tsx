import React from 'react';
import TitleProps from './def';
import titlesStyles from './Title.styles';
import {View, Text} from 'react-native';

const defaultProps: TitleProps = {
  title: 'Title Here',
  description: 'Description here',
};

const styles = titlesStyles;

const Title: React.FunctionComponent<TitleProps> = ({
  title,
  description,
  titleStyles,
  descriptionStyles,
}) => {
  return (
    <View>
      <Text style={{...styles.title, ...titleStyles}}>{title}</Text>
      <Text style={{...styles.description, ...descriptionStyles}}>
        {description}
      </Text>
    </View>
  );
};

export default Title;

Title.defaultProps = defaultProps;
