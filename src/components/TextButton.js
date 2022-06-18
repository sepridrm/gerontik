import React from 'react'
import Text from './CustomText'
// import { Text } from 'react-native'

const TextButton = ({text})  =>{
    return (
        <Text type="semi-bold" style={{ width: '100%', textAlign: 'center', color: 'white', fontSize: 16 }}>{text}</Text>
    )
}

export default TextButton