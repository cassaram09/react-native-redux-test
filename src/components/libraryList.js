import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listItem';

class LibraryList extends Component<{}> {
  componentWillMount(){
    this.data = this.props.libraries.map( library => {
      return Object.assign({key: library.id}, library);
    });
  }

  renderRow(item){
    return <ListItem item={item.item} />;
  }

  render() {
    return ( 
      <View>
        <FlatList
          data={this.data}
          renderItem={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
