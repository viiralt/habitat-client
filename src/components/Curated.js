import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderText from '../elements/HeaderText';
import Wrapper from '../elements/Wrapper';
import Image from '../elements/Image';
import Section from '../elements/Section';

export default class Curated extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderText>Curated listings</HeaderText>
        <Section>
          <ImageContainer>
            <Image source={require('../../assets/img/6.jpg')} />
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
