import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

import Map from '../components/Map';
import ListingsList from '../components/ListingsList';

import { Nunito } from '../styles/fonts';

// TODO figure out how to auto-resize containers to content!!!

class ListingDetailScreen extends Component {
  clickBackHandler = () => {
    this.props.navigator.pop({
      animated: true,
      animationType: 'fade',
    });
  };

  render() {
    return (
      <Container>
        <NavContainer>
          <PopScreen onPress={this.clickBackHandler}>
            <Icon name="ios-arrow-back-outline" size={20} color="#000" />
          </PopScreen>
          <Icons>
            <Icon name="ios-share-outline" size={20} color="#000" />
            <Icon name="ios-heart-outline" size={20} color="#000" />
          </Icons>
        </NavContainer>
        <ContentContainer>
          <ScrollView>
            <Photo source={{ uri: this.props.listing.photo }} />
            <LeadContainer>
              <PropertyType>{this.props.listing.property_type.toUpperCase()}</PropertyType>
              <Name>{this.props.listing.name}</Name>
            </LeadContainer>
            <UserLocationContainer>
              <Location>{this.props.listing.location}</Location>
              <UserImage source={require('../../assets/img/henri.jpg')} />
            </UserLocationContainer>
            <AmenitiesContainer>
              <IconGroup>
                <Icon name="ios-crop-outline" size={20} color="#000">
                  <IconText>
                    {this.props.listing.size.area_sqm}
                    {'sqm'}
                  </IconText>
                </Icon>
                <Icon name="ios-hammer-outline" size={20} color="#000">
                  <IconText marginLeft>{this.props.listing.condition}</IconText>
                </Icon>
              </IconGroup>
              <IconGroup>
                <Icon name="ios-alarm-outline" size={20} color="#000">
                  <IconText>
                    {this.props.listing.size.bathrooms}
                    {'bathrooms'}
                  </IconText>
                </Icon>
                <Icon name="ios-barcode-outline" size={20} color="#000">
                  <IconText>
                    {this.props.listing.size.bedrooms}
                    {'bedrooms'}
                  </IconText>
                </Icon>
              </IconGroup>
            </AmenitiesContainer>
            <DescriptionContainer>
              <Description>"{this.props.listing.description}"</Description>
            </DescriptionContainer>
            <Map />

            <ButtonContainer>
              <TouchableOpacity>
                <Contact>CONTACT</Contact>
              </TouchableOpacity>
            </ButtonContainer>
          </ScrollView>
        </ContentContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.View``;

const NavContainer = styled.View`
  height: 30px;
  width: 92%;
  margin-top: 30px;
  justify-content: space-between;
  flex-direction: row;
`;

const PopScreen = styled.TouchableOpacity`
  left: 15;
`;

const Icons = styled.View`
  flex-direction: row;
  width: 62px;
  justify-content: space-between;
  margin-left: 50;
`;

const ScrollView = styled.ScrollView``;

const Photo = styled.Image`
  width: 100%;
  height: 200px;
`;

const LeadContainer = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: column;
  margin-top: 20px;
  max-width: 70%;
  margin-left: 20px;
`;

const PropertyType = styled.Text`
  font-family: Nunito;
  font-weight: 700;
  font-size: 10;
`;

const Name = styled.Text`
  font-family: Nunito;
  font-weight: 700;
  font-size: 18;
`;

const UserLocationContainer = styled.View`
  width: 90%;
  height: 70px;
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5px;
`;

const Location = styled.Text`
  font-family: Nunito;
  font-weight: 400;
  font-size: 14;
`;

const UserImage = styled.Image`
  border-radius: 30px;
  height: 55;
  width: 55;
`;

const AmenitiesContainer = styled.View`
  width: 90%;
  height: 90px;
  margin-left: 20px;
`;

const IconGroup = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconText = styled.Text`
  font-family: Nunito;
  font-weight: 400;
  font-size: 11;
  margin-left: 10px;
`;

const DescriptionContainer = styled.View`
  width: 90%;
  height: 125px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Description = styled.Text`
  font-family: Nunito;
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
`;

const ButtonContainer = styled.View``;

const TouchableOpacity = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fbc531;
  height: 40;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Contact = styled.Text`
  color: #fff;
  font-weight: 700;
  font-family: Nunito;
`;

const mapStateToProps = (state, ownProps) => ({
  listing: state.listings.listings.find(listing => listing._id === ownProps.listingId),
});

export default connect(mapStateToProps)(ListingDetailScreen);
