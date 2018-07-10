import React, { Component } from 'react';
import styled from 'styled-components';

import HorizontalScroll from '../elements/HorizontalScroll';
import HeaderText from '../elements/HeaderText';
import SmallText from '../elements/SmallText';
import Wrapper from '../elements/Wrapper';
import Section from '../elements/Section';

export default class Carousel extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderText>What are you interested in?</HeaderText>
        <Section>
          <HorizontalScroll
            horizontal
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
          >
            <ItemContainer>
              <CarouselContainer>
                <ImageContainer>
                  <Image source={require('../../assets/img/5.jpg')} />
                </ImageContainer>
                <ContentContainer>
                  <SmallText>Apartments</SmallText>
                </ContentContainer>
              </CarouselContainer>
            </ItemContainer>
            <ItemContainer>
              <CarouselContainer>
                <ImageContainer>
                  <Image source={require('../../assets/img/2.jpg')} />
                </ImageContainer>
                <ContentContainer>
                  <SmallText>Villas</SmallText>
                </ContentContainer>
              </CarouselContainer>
            </ItemContainer>
            <ItemContainer>
              <CarouselContainer>
                <ImageContainer>
                  <Image source={require('../../assets/img/3.jpg')} />
                </ImageContainer>
                <ContentContainer>
                  <SmallText>Penthouses</SmallText>
                </ContentContainer>
              </CarouselContainer>
            </ItemContainer>
          </HorizontalScroll>
        </Section>
      </Wrapper>
    );
  }
}

const ItemContainer = styled.View`
  flex: 1;
  padding-right: 10px;
  margin-bottom: 40px;
`;

const CarouselContainer = styled.View`
  width: 130;
  height: 130;
  border-width: 0.5;
  shadow-opacity: 0.3;
  border-color: #dddddd;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

const ImageContainer = styled.View`
  flex: 2;
`;

const Image = styled.Image`
  flex: 1;
  width: null;
  height: null;
  resize-mode: cover;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin: 5px 0 0 5px;
`;
