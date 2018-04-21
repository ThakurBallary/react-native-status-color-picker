import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default class StatusColorPicker extends Component {
  state = {
    colors: this.props.colors,
    selectedColor: this.props.selectedColor,
    text: this.props.text,
    backupColor: this.props.selectedColor,
    backupText: this.props.text,
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.circle, { backgroundColor: item }]}
      onPress={() => this.setState({ selectedColor: item })}>
      {this.state.selectedColor === item &&
        <Icon name="check" style={{ color: '#fff', fontSize: 24 }} />}
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.card}>
            <FlatList
              data={this.state.colors}
              extraData={this.state}
              renderItem={this.renderItem}
              keyExtractor={this._keyExtractor}
              horizontal={true}
              keyboardShouldPersistTaps="always"
              style={{ borderBottomWidth: 1, borderColor: '#eee' }}
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
              <TouchableOpacity style={styles.actionContainer}>
                <Text
                  onPress={() => {
                    this.setState({
                      selectedColor: this.state.backupColor,
                      text: this.state.backupText,
                    });
                    this.props.onCancel();
                  }}>
                  CANCEL
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionContainer}>
                <Text
                  onPress={() => {
                    this.setState({
                      backupText: this.state.text,
                      backupColor: this.state.selectedColor,
                    });
                    this.props.onOk({
                      selectedColor: this.state.selectedColor,
                      text: this.state.text,
                    });
                  }}>
                  OK
                </Text>
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
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    padding: 15,
    fontSize: 18,
    flex: 1,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});
