import React, { Component } from 'react';
import styled from 'styled-components';

import HorizontalScroll from '../elements/HorizontalScroll';
import HeaderText from '../elements/HeaderText';
import SmallText from '../elements/SmallText';
import Wrapper from '../elements/Wrapper';
import Image from '../elements/Image';

export default class Carousel extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderText>What properties are you interested in?</HeaderText>
        <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
          <CarouselContainer>
            <ImageContainer>
              <Image source={require('../../assets/img/1.jpg')} />
            </ImageContainer>
            <ContentContainer>
              <SmallText>Apartments</SmallText>
            </ContentContainer>
          </CarouselContainer>
        </HorizontalScroll>
      </Wrapper>
    );
  }
}

const CarouselContainer = styled.View`
  width: 130;
  height: 130;
  border-width: 0.5;
  shadow-opacity: 0.3;
  border-bottom-left-radius: 4;
  border-bottom-right-radius: 4;
  box-shadow: 1px 5px 5px black;
  border-color: rgba(0, 0, 0, 0.1);
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
