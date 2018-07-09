import React, { Component } from 'react';
import styled from 'styled-components';

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

const CarouselContainer = styled.View`
  height: 130;
  width: 130;
  border-width: 0.5;
  border-bottom-left-radius: 4;
  border-bottom-right-radius: 4;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 1px 5px 5px black;
  shadow-opacity: 0.3;
`;

const Container = styled.View`
  flex: 1;
  margin-horizontal: 20;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin: 5px 0 0 5px;
`;

const ImageContainer = styled.View`
  flex: 2;
`;
