import React, { Component } from 'react';

import HorizontalScroll from '../../elements/HorizontalScroll';
import CarouselContainer from './CarouselContainer';
import HeaderText from '../../elements/HeaderText';
import ContentContainer from './ContentContainer';
import SmallText from '../../elements/SmallText';
import ImageContainer from './ImageContainer';
import Wrapper from '../../elements/Wrapper';
import Section from '../../elements/Section';
import Image from '../../elements/Image';

export default class Carousel extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderText>What properties are you interested in?</HeaderText>
        <Section>
          <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            <CarouselContainer>
              <ImageContainer>
                <Image source={require('../../../assets/img/1.jpg')} />
              </ImageContainer>
              <ContentContainer>
                <SmallText>Apartments</SmallText>
              </ContentContainer>
            </CarouselContainer>
          </HorizontalScroll>
        </Section>
      </Wrapper>
    );
  }
}
