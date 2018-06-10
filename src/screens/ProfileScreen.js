import React from 'react';
import styled from 'styled-components';

import ProfileList from '../components//ProfileList';

import { Nunito } from '../styles/fonts';

const ProfileScreen = props => (
  <Wrapper>
    <ProfileContainer>
      <HeaderContainer>
        <Username>Henri</Username>
        <TouchableOpacity>
          <UserProfileButton>View and edit profile</UserProfileButton>
        </TouchableOpacity>
      </HeaderContainer>
      <UserImage source={require('../../assets/img/henri.jpg')} />
    </ProfileContainer>
    <ListContainer>
      <ProfileList />
    </ListContainer>
  </Wrapper>
);

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  flex-direction: column;
`;

const ProfileContainer = styled.View`
  flex-direction: column;
  flex-direction: row;
  margin-top: 40;
  padding: 20px;
  justify-content: space-between;
`;

const HeaderContainer = styled.View`
  height: 100;
  flex-direction: column;
  align-items: flex-start;
  width: 150;
`;

const UserImage = styled.Image`
  border-radius: 30px;
  height: 55;
  width: 55;
`;

const Username = styled.Text`
  font-size: 26px;
  font-weight: 700;
  font-family: Nunito;
  margin-bottom: 2px;
`;

const TouchableOpacity = styled.TouchableOpacity`
  align-items: flex-start;
`;

const UserProfileButton = styled.Text`
  font-size: 14px;
  font-weight: 400;
  font-family: Nunito;
`;

const ListContainer = styled.View``;

export default ProfileScreen;
