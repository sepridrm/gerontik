import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import Constants from 'expo-constants';

export default class CustomStatusBar extends Component {
    render() {
        const color = this.props.color
        const barStyle = "dark-content"
        return (
            // <View style={{ height: Constants.statusBarHeight, backgroundColor: color }}>
                <StatusBar backgroundColor={color} translucent barStyle={barStyle} />
            // </View>
        )
    }
}