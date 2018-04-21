import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StatusColorPicker extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>React Native Status Color Picker</Text>
                <Text>Initial Release on April 22, 2018</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        aligntItems: 'center',
    }
})