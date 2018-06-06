import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/AuthScreen';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login',
  },
});
