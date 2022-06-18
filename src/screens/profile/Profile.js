import React from 'react'
import { View } from 'react-native'
import { Text, VStack, Button } from 'native-base'
import { styles } from '../../utils/helpers'
import { Ionicons } from '@expo/vector-icons'
import TextButton from '../../components/TextButton'

const Profile = ({ props, onLogout }) => {
    const user = props.USER
    return (
        <View style={styles.publicContainer}>
            <VStack>
                <Text fontFamily="bold" fontSize="4xl" style>{user.id_perawat ? 'Edisi Perawat' : 'Edisi Mahasiswa'}</Text>
                <Text fontFamily="bold" fontSize="3xl" style><Ionicons size={40} name="ios-people-circle-outline" /> {user.nama}</Text>
                <Text fontFamily="semi-bold" fontSize="xl" style>{user.email}</Text>
                <Text fontFamily="regular" fontSize="lg"  style><Ionicons size={23} name="ios-card-outline" /> {user.id_perawat ? user.id_perawat : user.id_mahasiswa}</Text>
                <Button
                    bg="red.600"
                    mt={10}
                    w="60%"
                    onPress={() => onLogout()}>
                    <TextButton text="Logout" />
                </Button>
            </VStack>
        </View>
    )
}

export default Profile
