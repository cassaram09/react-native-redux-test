import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './listItem';

class LibraryList extends Component {

  componentWillMount() {
    this.data = this.props.libraries.map(library => {
      return { key: library.id, library };
    });
  }

  renderRow({ item }) {
    return <ListItem library={item.library} />;
  }

  render() {
    return (
      <FlatList data={this.data} renderItem={this.renderRow.bind(this)} />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
