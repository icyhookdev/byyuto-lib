import {StyleSheet} from 'react-native';

import colors from '../../config/colors';

const buttonStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,

    borderRadius: 4,
    width: '100%',
  },
  solid: {
    backgroundColor: colors.primary,
  },
  clear: {},
  outline: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    textAlign: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: colors.disabledBackground,
    color: colors.disabledText,
  },
  disabledOutline: {
    borderColor: colors.disabledBackground,
    borderWidth: 1,
  },
  disabledClear: {},
});

export default buttonStyles;
