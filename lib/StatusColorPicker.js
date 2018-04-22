import React, { Component } from 'react';
import {
  Dimensions,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import ColorPicker from './ColorPicker';

export default class StatusColorPicker extends Component {
  state = {
    colors: this.props.colors,
    selectedColor: this.props.selectedColor,
    text: this.props.text,
    backupColor: this.props.selectedColor,
    backupText: this.props.text,
  };

  onSelect = color => this.setState({ selectedColor: color });

  cancel = () => {
    this.setState({
      selectedColor: this.state.backupColor,
      text: this.state.backupText,
    });
    this.props.onCancel();
  }

  ok = () => {
    this.setState({
      backupText: this.state.text,
      backupColor: this.state.selectedColor,
    });
    this.props.onOk({
      selectedColor: this.state.selectedColor,
      text: this.state.text,
    });
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.card}>
            <ColorPicker
              colors={this.state.colors}
              selectedColor={this.state.selectedColor}
              onSelect={this.onSelect}
            />
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  width: 10,
                  backgroundColor: this.state.selectedColor,
                }}
              />
              <TextInput
                placeholder="Text"
                multiline={true}
                defaultValue={this.state.text}
                onChangeText={text => this.setState({ text })}
                underlineColorAndroid="#0000"
                style={styles.textInput}
              />
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                style={styles.actionContainer}
                onPress={this.cancel}>
                <Text>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionContainer}
                onPress={this.ok}>
                <Text>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0004',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: screenWidth - 40,
    backgroundColor: '#fff',
  },
  textInput: {
    padding: 15,
    fontSize: 18,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#eee',
  },
});
