import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Map from '../components/Map';
import Icon from 'react-native-vector-icons/Ionicons';

import { Nunito } from '../styles/fonts';

// TODO figure out how to hide status bar and insert custom nav bar

class ListingDetailScreen extends Component {
  render() {
    return (
      <Container>
        <Scroller>
          <Photo source={require('../../assets/img/3.jpg')} />
          <LeadContainer>
            <PropertyType>{this.props.listing.property_type.toUpperCase()}</PropertyType>
            <Name>{this.props.listing.name}</Name>
          </LeadContainer>
          <UserLocationContainer>
            <Location>Texas, Mexico</Location>
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
                <IconText marginLeft>brand new</IconText>
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
        </Scroller>
      </Container>
    );
  }
}

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BackButton = Icon;

const Scroller = styled.ScrollView``;

const Photo = styled.Image`
  width: 100%;
  height: 200px;
`;

const LeadContainer = styled.View`
  width: 100%;
  height: 90px;
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
  height: 90px;
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  flex-wrap: wrap;
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
  // listing: state.listings.listings,
  listing: state.listings.listings.find(listing => listing._id === ownProps.listingId),
});

export default connect(mapStateToProps)(ListingDetailScreen);
