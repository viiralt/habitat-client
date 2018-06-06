import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('habitat-client.Authscreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('habitat-client.HomeScreen', () => HomeScreen, store, Provider);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'habitat-client.AuthScreen',
    title: 'Login',
  },
});
