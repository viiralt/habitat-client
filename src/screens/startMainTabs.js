import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { navigatorStyle } from '../styles/navigatorStyle';

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
        navigatorStyle: {
          ...navigatorStyle,
        },
      },
      {
        label: 'SAVED',
        screen: 'habitat-client.SavedListingsScreen',
        icon: savedIcon,
        navigatorStyle: {
          ...navigatorStyle,
        },
      },
      {
        label: 'MAP',
        screen: 'habitat-client.MapScreen',
        icon: mapIcon,
        navigatorStyle: {
          ...navigatorStyle,
        },
      },
      {
        label: 'CHAT',
        screen: 'habitat-client.ChatScreen',
        icon: chatIcon,
        navigatorStyle: {
          ...navigatorStyle,
        },
      },
      {
        label: 'PROFILE',
        screen: 'habitat-client.ProfileScreen',
        icon: ProfileIcon,
        navigatorStyle: {
          ...navigatorStyle,
        },
      },
    ],
    tabsStyle: {
      /* tabBarButtonColor: '#fff', */
      tabBarSelectedButtonColor: '#55c57a',
      tabBarBackgroundColor: '#fff',
    },
  });
};

export default startTabs;
