import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderText from '../elements/HeaderText';
import MainText from '../elements/MainText';
import Wrapper from '../elements/Wrapper';
import Section from '../elements/Section';
import Image from '../elements/Image';

export default class Curated extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderText>Curated listings</HeaderText>
        <MainText>A selection of homes verified bla bla</MainText>
        <Section>
          <ImageContainer>
            <LargeImage source={require('../../assets/img/6.jpg')} />
          </ImageContainer>
        </Section>
      </Wrapper>
    );
  }
}

const ImageContainer = styled.View`
  width: 100%;
  height: 250;
  border-color: #dddddd;
`;

const LargeImage = styled.Image`
  flex: 1;
  height: null;
  width: null;
  resize-mode: cover;
  border-radius: 4;
  border-width: 1;
  border-color: #dddddd;
`;
