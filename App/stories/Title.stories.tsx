import React from 'react';

import {storiesOf} from '@storybook/react-native';
import CenterView from './CenterView';
import Title from '../components/Title/Title';

storiesOf('Title', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('title with description', () => (
    <Title
      title="Test Title"
      description="Before starting the services you must take a photo of the pet upon arrival."
    />
  ))
  .add('title 2', () => (
    <Title
      title="DATE AND HOUR"
      description=""
      titleStyles={{letterSpacing: 5}}
    />
  ))
  .add('title 3', () => <Title title="New Service" description="" />);
