import React from 'react';
import {storiesOf} from '@storybook/react-native';
// import {action} from '@storybook/addon-actions';
// import {text, boolean, object} from '@storybook/addon-knobs';

import CenterView from './CenterView';
import SwipeButton from '../components/SwipeButton/SwipeButton';

storiesOf('Swipe Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <SwipeButton />);
