/**
 * @format
 * @ts-nocheck
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Button} from './components/Button/Button';
import Input from './components/Input/Input';
import SwipeButton from './components/SwipeButton/SwipeButton';
import Title from './components/Title/Title';

AppRegistry.registerComponent(appName, () => App);

export {Button, Input, SwipeButton, Title};
