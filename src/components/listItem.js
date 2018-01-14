import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component<{}> {
  render() {
    console.log(this.props.item)
    return ( 
      <CardSection>
        <Text>{this.props.item.title}</Text>
      </CardSection>
    );
  }
}

export default ListItem;
