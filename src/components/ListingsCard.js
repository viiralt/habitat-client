import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Ionicons';

class ListingsCard extends Component {
  render() {
    return (
      <Container>
        <ContentWrapper>
          <StyledImage />
          <StyledText />
        </ContentWrapper>
        <ButtonWrapper>
          <TouchableOpacity>
            <Icon name="ios-ionitron-outline" />
          </TouchableOpacity>
        </ButtonWrapper>
      </Container>
    );
  }
}

const Container = styled.View`
  margin: 22px;
`;

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;

const StyledImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const ContentWrapper = styled.View``;
const ButtonWrapper = styled.View``;

export default ListingsCard;
