import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { getContrastYIQ } from './HelperFunctions';

export default class StatusColorPicker extends Component {
  state = {
    selectedColor: this.props.selectedColor,
    text: this.props.text,
  };

  changeColor = async () => {
    const colors = this.props.colors;
    let index = colors.findIndex(e => e === this.state.selectedColor) + 1;
    index = index < 0 || index >= colors.length ? 0 : index;
    await this.setState({ selectedColor: colors[index] });
    this.props.onChange(this.state);
  };

  render() {
    const fontColor = getContrastYIQ(this.state.selectedColor);
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.selectedColor },
        ]}>
        <TextInput
          placeholder="Type a Status"
          placeholderTextColor={fontColor}
          multiline={true}
          defaultValue={this.state.text}
          onChangeText={async (text) => {
            await this.setState({ text });
            this.props.onChange(this.state);
          }}
          underlineColorAndroid="#0000"
          style={[styles.textInput, { color: fontColor }]}
        />
        <View style={{ justifyContent: 'center' }}>
          <Icon
            name="palette"
            onPress={this.changeColor}
            style={{
              fontSize: 25,
              color: fontColor,
              alignSelf: 'center',
              padding: 20,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    minWidth: 125,
  },
});
