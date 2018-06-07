import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Item>
            <Input placeholder="Search" />
          </Item>
          <Button>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}
