import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { getContrastYIQ } from './HelperFunctions';

export default class ColorPicker extends Component {
  state = {
    colors: this.props.colors,
    selectedColor: this.props.selectedColor,
  };

  renderItem = ({ item }) => {
    const fontColor = getContrastYIQ(item);
    return (
    <TouchableOpacity
      style={[styles.circle, { backgroundColor: item }]}
      onPress={() => {
        this.setState({ selectedColor: item });
        this.props.onSelect(item);
      }}>
      {this.state.selectedColor === item &&
        <Icon name="check" style={{ color: fontColor, fontSize: 24 }} />}
    </TouchableOpacity>
  )};

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <FlatList
        data={this.state.colors}
        extraData={this.state}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        horizontal={true}
        keyboardShouldPersistTaps="always"
        style={{ maxHeight: 75 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
