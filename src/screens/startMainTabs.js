import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = async () => {
  const exploreIcon = await Icon.getImageSource('ios-search-outline', 30);
  const savedIcon = await Icon.getImageSource('ios-heart-outline', 30);
  const mapIcon = await Icon.getImageSource('ios-compass-outline', 30);
  const chatIcon = await Icon.getImageSource('ios-chatboxes-outline', 30);
  const ProfileIcon = await Icon.getImageSource('ios-contact-outline', 30);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'EXPLORE',
        screen: 'habitat-client.ExploreScreen',
        icon: exploreIcon,
      },
      {
        label: 'SAVED',
        screen: 'habitat-client.SavedListingsScreen',
        icon: savedIcon,
      },
      {
        label: 'MAP',
        screen: 'habitat-client.MapScreen',
        icon: mapIcon,
      },
      {
        label: 'CHAT',
        screen: 'habitat-client.ChatScreen',
        icon: chatIcon,
      },
      {
        label: 'PROFILE',
        screen: 'habitat-client.ProfileScreen',
        icon: savedIcon,
      },
    ],
    tabsStyle: {
      /* tabBarButtonColor: '#fff', */
      tabBarSelectedButtonColor: '#78d5a2',
      tabBarBackgroundColor: '#fff',
    },
  });
};

export default startTabs;
