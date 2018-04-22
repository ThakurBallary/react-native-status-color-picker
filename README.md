# React Native Status Color Picker

Customizable color picker for your beautiful react native apps

![LICENSE MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)

[![NPM](https://nodei.co/npm/react-native-status-color-picker.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-status-color-picker/)

### Installation
```
npm i react-native-status-color-picker --save
```

### Basic Usage
###### App.js
```
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import StatusColorPicker from 'react-native-status-color-picker';

export default class App extends Component {
  state = {
    visible: false,
    colors: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"],
    selectedColor: '#F44336',
    text: '',
  };

  ok = data => {
    this.setState({ selectedColor: data.selectedColor, text: data.text });
    this.close();
  };

  close = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <View style={styles.container}>
        
        <Icon
          name="palette"
          style={{ fontSize: 34, color: this.state.selectedColor }}
          onPress={() => this.setState({ visible: true })}
        />
        <StatusColorPicker
          visible={this.state.visible}
          colors={this.state.colors}
          selectedColor={this.state.selectedColor}
          text={this.state.text}
          onOk={this.ok}
          onCancel={this.close}
        />

        <Text>Selected Color = {this.state.selectedColor}</Text>
        <Text>Text = {this.state.text}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### Props
Key | Type | Default | Value
--- | --- | --- | --- 
color | Array | [] | all css colors
onCancel | Function | | pass function to execute onPress of CANCEL
onOk | Function | | pass function to execute onPress of OK
selectedColor | String | '' | mention any one color from array of colors
text | String | '' | any string
visible | Boolean | false | true/false

### Contributing

Suggestions and Contributions are always welcome. 

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

### License
This project is licensed under the [MIT License](https://github.com/ThakurBallary/react-native-status-color-picker/blob/master/LICENSE)
