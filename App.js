import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/AuthScreen';
import ChatScreen from './src/screens/ChatScreen';
import Explore from './src/screens/Explore/Explore';
import ListingDetailScreen from './src/screens/ListingDetailScreen';
import MapScreen from './src/screens/MapScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SavedListingsScreen from './src/screens/SavedListingsScreen';
import CreateListingScreen from './src/screens/CreateListingScreen';
import CreateListingDetailScreen from './src/screens/CreateListingDetailScreen';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent('habitat-client.AuthScreen', () => AuthScreen);
Navigation.registerComponent('habitat-client.ChatScreen', () => ChatScreen);
Navigation.registerComponent(
  'habitat-client.CreateListingScreen',
  () => CreateListingScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'habitat-client.CreateListingDetailScreen',
  () => CreateListingDetailScreen,
  store,
  Provider
);
Navigation.registerComponent('habitat-client.Explore', () => Explore, store, Provider);
Navigation.registerComponent(
  'habitat-client.ListingDetailScreen',
  () => ListingDetailScreen,
  store,
  Provider
);
Navigation.registerComponent('habitat-client.MapScreen', () => MapScreen, store, Provider);
Navigation.registerComponent('habitat-client.ProfileScreen', () => ProfileScreen, store, Provider);
Navigation.registerComponent(
  'habitat-client.SavedListingsScreen',
  () => SavedListingsScreen,
  store,
  Provider
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'habitat-client.AuthScreen',
    navigatorStyle: {
      navBarHidden: true,
    },
  },
});
