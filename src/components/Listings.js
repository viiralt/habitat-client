import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderText from '../elements/HeaderText';
import SmallText from '../elements/SmallText';
import Wrapper from '../elements/Wrapper';
import Section from '../elements/Section';
import Image from '../elements/Image';

export default class Listings extends Component {
  render() {
    return (
      <Wrapper>
        <Section>
          <HeaderText>Listings</HeaderText>
          <Contain>
            <ItemContainer>
              <ImageContainer>
                <Image source={require('../../assets/img/6.jpg')} />
              </ImageContainer>
              <ContentContainer>
                <SmallText>APARTMENT - 2BEDS</SmallText>
                <SmallText>Bobo's Hut</SmallText>
                <SmallText>€ 980 per month</SmallText>
              </ContentContainer>
            </ItemContainer>

            <ItemContainer>
              <ImageContainer>
                <Image source={require('../../assets/img/6.jpg')} />
              </ImageContainer>
              <ContentContainer>
                <SmallText>APARTMENT - 2BEDS</SmallText>
                <SmallText>Bobo's Hut</SmallText>
                <SmallText>€ 980 per month</SmallText>
              </ContentContainer>
            </ItemContainer>
          </Contain>
        </Section>
      </Wrapper>
    );
  }
}

const Contain = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ItemContainer = styled.View`
  width: 162;
  height: 150;
  border-width: 0.5;
  border-color: #dddddd;
`;

const ImageContainer = styled.View`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin-left: 5;
  align-items: flex-start;
  justify-content: space-evenly;
`;
