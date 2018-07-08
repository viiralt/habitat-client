import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderText from '../../elements/HeaderText';
import ScrollView from '../../elements/ScrollView';
import SmallText from '../../elements/SmallText';

import Image from '../../elements/Image';

export default class Carousel extends Component {
  render() {
    return (
      <Wrapper>
        <ScrollView scrollEventThrottle={16}>
          <HeaderText>What properties are you interested in?</HeaderText>
          <Container>
            <CarouselScroll horizontal showsHorizontalScrollIndicator={false}>
              <CarouselContainer>
                <ImageContainer>
                  <Image source={require('../../../assets/img/1.jpg')} />
                </ImageContainer>
                <ContentContainer>
                  <SmallText>Wakaka</SmallText>
                </ContentContainer>
              </CarouselContainer>
            </CarouselScroll>
          </Container>
        </ScrollView>
      </Wrapper>
    );
  }
}

const Wrapper = styled.View`
  padding-top: 20;
  flex: 1;
`;

const Container = styled.View`
  margin-top: 20px;
`;

const CarouselContainer = styled.View`
  height: 130;
  width: 130;
  margin: 0 20px;
  border-width: 0.5;
  border-color: #dddddd;
`;

const CarouselScroll = styled.ScrollView``;

const ImageContainer = styled.View`
  flex: 2;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin-top: 10px;
  padding: 0 10px;
`;
