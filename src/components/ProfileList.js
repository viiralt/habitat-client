import React, { Component } from 'react';

import ProfileListItem from './ProfileListItem';

class ProfileList extends Component {
  navCreateListingHandler = () => {
    this.props.navigator.push({
      screen: 'habitat-client.CreateListingScreen',
      passProps: {
        listings: this.props.listings,
      },
    });
  };

  render() {
    return <ProfileListItem addListingHandler={this.navCreateListingHandler} />;
  }
}

export default ProfileList;
