import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const OptionHeader = ({ ionicon, navigation, toView }) => {
    return (
        <TouchableOpacity style={{ padding: 7, marginRight: 7 }} onPress={() => navigation.navigate(toView)}>
            <Ionicons size={30} name={ionicon} />
        </TouchableOpacity>
    )
}

export default OptionHeader
