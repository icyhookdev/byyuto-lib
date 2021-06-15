import React from 'react';
import {StyleSheet} from 'react-native';

import {PanGestureHandler} from 'react-native-gesture-handler';

import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';
import {useState} from 'react';
import colors from '../../config/colors';
import SwipeButtonProps from './def';

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 48;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const defaultProps: SwipeButtonProps = {
  handleComplete: () => console.log('completed'),
  animationColors: ['#FC6E66', '#FC6E66'],
  text: 'Slide to end service',
};

const SwipeButton = ({
  text,
  icon,
  handleComplete,
  animationColors,
  textStyles,
  ButtonStyles,
  containerStyles,
}) => {
  // Animated value for X translation
  const X = useSharedValue(0);
  // Toggled State
  const [toggled, setToggled] = useState(false);

  // Gesture Handler Events
  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }

      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    },
  });

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeCont: useAnimatedStyle(() => {
      return {};
    }),
    swipeable: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
          ['#FC6E66', '#FC6E66'],
        ),
        transform: [{translateX: X.value}],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.7, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }),
  };

  return (
    <Animated.View
      style={[styles.swipeCont, AnimatedStyles.swipeCont, containerStyles]}>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View
          style={[styles.swipeable, AnimatedStyles.swipeable, ButtonStyles]}>
          {icon && icon()}
        </Animated.View>
      </PanGestureHandler>

      <Animated.Text
        style={[styles.swipeText, AnimatedStyles.swipeText, textStyles]}>
        {text}
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: '#FFEDEC',
    borderRadius: 5,
    // padding: BUTTON_PADDING,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  colorWave: {
    position: 'absolute',
    left: 0,
    height: BUTTON_HEIGHT,
  },
  swipeable: {
    position: 'absolute',
    left: 0,
    height: 54,
    width: 60,
    borderRadius: 5,
    zIndex: 3,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  swipeText: {
    alignSelf: 'center',
    fontSize: 14,
    zIndex: 2,
    color: colors.primary,
  },
});

SwipeButton.defaultProps = defaultProps;

export default SwipeButton;
