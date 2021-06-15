import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, boolean, object} from '@storybook/addon-knobs';

import {Button} from '../components/Button/Button';
import CenterView from './CenterView';

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('solid', () => (
    <Button
      type="solid"
      onPress={action('clicked-text')}
      loading={boolean('Loading', false)}
      disabled={boolean('Disabled', false)}
      buttonContainerStyles={object('Container Styles', {})}
      buttonTextStyles={object('Text Styles', {})}>
      {text('ButtonName', 'Solid')}
    </Button>
  ))
  .add('outline', () => (
    <Button
      type="outline"
      onPress={action('clicked-emoji')}
      loading={boolean('Loading', false)}
      buttonContainerStyles={object('Container Styles', {})}
      buttonTextStyles={object('Text Styles', {})}>
      {text('ButtonName', 'Outline')}
    </Button>
  ))
  .add('clear', () => (
    <Button
      type="clear"
      onPress={action('clicked-emoji')}
      loading={boolean('Loading', false)}
      buttonContainerStyles={object('Container Styles', {})}
      buttonTextStyles={object('Text Styles', {})}>
      {text('ButtonName', 'Clear')}
    </Button>
  ));
