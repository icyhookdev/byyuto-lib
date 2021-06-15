import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';

import colors from '../../config/colors';
import buttonStyles from './Button.styles';
import ButtonProps from './def';

const styles = buttonStyles;

const defaultProps: ButtonProps = {
  type: 'clear',
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  onPress,
  children,
  loading,
  type,
  icon,
  disabled,
  buttonContainerStyles,
  buttonTextStyles,
  loadingColor,
  loadingSize,
  iconPosition,
  iconContainerStyles,
}) => {
  const getTextColor = () => {
    switch (type) {
      case 'solid':
        return colors.white;
      case 'clear':
        return colors.primary;
      case 'outline':
        return colors.primary;

      default:
        return colors.white;
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={loading ? () => {} : onPress}
        disabled={disabled}
        style={
          disabled && type === 'solid'
            ? {...styles.disabled, ...styles.container}
            : {
                ...styles.container,
                ...styles[type],
                ...buttonContainerStyles,
              }
        }>
        {loading ? (
          <ActivityIndicator
            size={loadingSize || 'small'}
            color={loadingColor || getTextColor()}
          />
        ) : (
          <View style={styles.textContainer}>
            {iconPosition === 'left' && icon && (
              <View
                style={{
                  ...iconContainerStyles,
                  ...(iconPosition === 'left' && {marginRight: 5}),
                }}>
                {icon()}
              </View>
            )}

            <Text
              style={
                disabled && type === 'solid'
                  ? {...styles.disabled}
                  : {
                      ...styles.text,
                      color: getTextColor(),
                      ...buttonTextStyles,
                      ...(iconPosition === 'right' && {marginLeft: 5}),
                    }
              }>
              {children}
            </Text>
            {iconPosition === 'right' && icon && (
              <View style={{...iconContainerStyles}}>{icon()}</View>
            )}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = defaultProps;
