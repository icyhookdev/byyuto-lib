import React from 'react';
import {action} from '@storybook/addon-actions';

import {storiesOf} from '@storybook/react-native';
import CenterView from './CenterView';
import Input from '../components/Input/Input';
import {text, boolean, object, number} from '@storybook/addon-knobs';

storiesOf('Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Input
      label={text('InputLabel', 'Email')}
      placeholder={text('Placeholder', 'Email')}
      multiline={boolean('Multiline', true)}
    />
  ))
  .add('Error message', () => (
    <Input
      label={text('InputLabel', 'Email')}
      message={text('Message', 'Please enter a valid email')}
      messageType="error"
      placeholder={text('Placeholder', 'Email')}
    />
  ))
  .add('Success message', () => (
    <Input
      label={text('InputLabel', 'Email')}
      message={text('Message', 'Valid Email')}
      messageType="success"
      placeholder={text('Placeholder', 'Email')}
    />
  ))
  .add('Password', () => (
    <Input
      label={text('InputLabel', 'Password')}
      secureTextEntry
      maxLength={number('MaxLength', 10)}
      placeholder={text('Placeholder', 'Password')}
      onChangeText={action('onChangeText')}
    />
  ));
