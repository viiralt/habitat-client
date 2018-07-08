import React, { Component } from 'react';
import styled from 'styled-components';

import HorizontalScroll from '../../elements/HorizontalScroll';
import HeaderText from '../../elements/HeaderText';
import SmallText from '../../elements/SmallText';
import Wrapper from '../../elements/Wrapper';
import Image from '../../elements/Image';
import Container from './Container';

export default class Carousel extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderText>What properties are you interested in?</HeaderText>
        <Container>
          <HorizontalScroll horizontal showsHorizontalScrollIndicator={false}>
            <CarouselContainer>
              <ImageContainer>
                <Image source={require('../../../assets/img/1.jpg')} />
              </ImageContainer>
              <ContentContainer>
                <SmallText>Wakaka</SmallText>
              </ContentContainer>
            </CarouselContainer>
          </HorizontalScroll>
        </Container>
      </Wrapper>
    );
  }
}

const CarouselContainer = styled.View`
  height: 130;
  width: 130;
  border-width: 0.5;
  border-color: #dddddd;
`;

const ImageContainer = styled.View`
  flex: 2;
`;

const ContentContainer = styled.View`
  flex: 1;
  margin-top: 10px;
  padding: 0 10px;
`;
