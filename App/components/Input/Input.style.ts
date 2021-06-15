import {StyleSheet} from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    color: colors.label,
    fontWeight: '500',
    padding: 12,
    borderRadius: 5,
    height: 40,
    width: '100%',
    borderColor: colors.borderInput,
    borderWidth: 1,
    minWidth: 137,
  },
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: colors.label,
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    color: colors.label,
    marginTop: 5,
  },
  success: {
    color: colors.success,
  },
  error: {
    color: colors.error,
  },
  warning: {
    color: colors.warning,
  },

  multiline: {
    height: 120,
  },
});

export default styles;
