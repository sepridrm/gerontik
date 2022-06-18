import React, { Component } from 'react';
import { Platform, Text } from 'react-native';
import { getSize } from '../utils/helpers'

export default class CustomText extends Component {
    setFontType = (type) => {
        switch (type) {
            case 'black':
                return 'black'
            case 'black-italic':
                return 'black-italic'
            case 'bold':
                return 'bold'
            case 'bold-italic':
                return 'bold-italic'
            case 'extra-bold':
                return 'extra-bold'
            case 'extra-bold-italic':
                return 'extra-bold-italic'
            case 'extra-light':
                return 'extra-light'
            case 'extra-light-italic':
                return 'extra-light-italic'
            case 'italic':
                return 'italic'
            case 'light':
                return 'light'
            case 'light-italic':
                return 'light-italic'
            case 'medium':
                return 'medium'
            case 'medium-italic':
                return 'medium-italic'
            case 'semi-bold':
                return 'semi-bold'
            case 'semi-bold-italic':
                return 'semi-bold-italic'
            case 'thin':
                return 'thin'
            case 'thin-italic':
                return 'thin-italic'
            default:
                return 'regular'
        }
    }
    render() {
        const font = this.setFontType(this.props.type ? this.props.type : 'regular')
        const style = [{ fontFamily: font, fontSize: Platform.OS === 'android' ? getSize.heightScreen < 800 ? 12 : 14 : 14 }, this.props.style || {}]
        const allProps = Object.assign({}, this.props, { style: style })
        const numberLine = this.props.line ? this.props.line : null
        return <Text numberOfLines={numberLine} {...allProps}>{this.props.children}</Text>
    }
}
