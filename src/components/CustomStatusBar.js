import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'

export default class CustomStatusBar extends Component {
    render() {
        const color = this.props.color
        const barStyle = "dark-content"
        return (
            <StatusBar backgroundColor={color} translucent barStyle={barStyle} />
        )
    }
}