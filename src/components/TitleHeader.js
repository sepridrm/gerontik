import React from 'react'
import Text from './CustomText'
// import { Text } from 'react-native'

const TitleHeader = ({text})  =>{
    return (
        <Text type='semi-bold' style={{ fontSize: 18 }} >{text}</Text>
    )
}

export default TitleHeader