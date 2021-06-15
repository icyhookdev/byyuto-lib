import {StyleSheet} from 'react-native';

import colors from '../../config/colors';

const titlesStyles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.title,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.label,
  },
});

export default titlesStyles;
