import React from 'react'
import { Icon } from 'native-base'
import { Ionicons } from '@expo/vector-icons';

const IconInput = ({icon}) => {
    return (
        <Icon
            as={icon}
            size="sm"
            marginLeft={4}
            color="gray"
        />
    )
}

export default IconInput