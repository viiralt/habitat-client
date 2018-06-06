import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/AuthScreen';
import ChatScreen from './src/screens/ChatScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ListingDetailScreen from './src/screens/ListingDetailScreen';
import MapScreen from './src/screens/MapScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SavedListingsScreen from './src/screens/SavedListingsScreen';

import startMainTabs from './src/screens/startMainTabs';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);
Navigation.registerComponent('awesome-places.ChatScreen', () => ChatScreen);
Navigation.registerComponent('awesome-places.ExploreScreen', () => ExploreScreen);
Navigation.registerComponent('awesome-places.ListingDetailScreen', () => ListingDetailScreen);
Navigation.registerComponent('awesome-places.MapScreen', () => MapScreen);
Navigation.registerComponent('awesome-places.ProfileScreen', () => ProfileScreen);
Navigation.registerComponent('awesome-places.SavedListingsScreen', () => SavedListingsScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.Explore',
    title: 'Login',
  },
});
