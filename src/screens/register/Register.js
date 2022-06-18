import React, { useState } from 'react'
import { View, ScrollView, Image } from 'react-native'
import Text from '../../components/CustomText'
import { Button, HStack, Input, Stack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import TextButton from '../../components/TextButton';
import IconInput from '../../components/IconInput';

const Register = ({ props, form_data }) => {
    const [showPassword, setShowPassword] = useState(false)


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/adaptive-icon.png')}
                />
                <Stack space={4} w="100%" mt={10}>
                    <HStack ml={3}>
                        <Text type="bold" style={{ color: form_data.whoAmI === 1 ? 'green' : 'gray', padding: 5, fontSize: 16, textDecorationLine : form_data.whoAmI === 1 ? 'underline' : null }} onPress={() => form_data.setWhoAmI(1)}>Perawat</Text>
                        <Text type="bold" style={{ color: form_data.whoAmI === 2 ? 'green' : 'gray', padding: 5, fontSize: 16, textDecorationLine : form_data.whoAmI === 2 ? 'underline' : null }} onPress={() => form_data.setWhoAmI(2)}>Mahasiswa</Text>
                    </HStack>
                    <Input
                        fontFamily="regular"
                        InputLeftElement={
                            <IconInput icon={<Ionicons name="ios-card-outline" />} />
                        }
                        value={form_data.id}
                        onChangeText={(text) => form_data.setId(text)}
                        variant="rounded"
                        placeholder={form_data.whoAmI === 1 ? "ID Perawat" : "NIM"}
                        keyboardType="numeric"
                    />
                    <Input
                        fontFamily="regular"
                        InputLeftElement={
                            <IconInput icon={<Ionicons name="ios-people-outline" />} />
                        }
                        value={form_data.nama}
                        onChangeText={(text) => form_data.setNama(text)}
                        variant="rounded"
                        placeholder="Nama"
                    />
                    <Input
                        fontFamily="regular"
                        InputLeftElement={
                            <IconInput icon={<Ionicons name="ios-mail-outline" />} />
                        }
                        value={form_data.email}
                        onChangeText={(text) => form_data.setEmail(text)}
                        variant="rounded"
                        placeholder="Alamat email"
                        keyboardType="email-address"
                    />
                    <Input
                        fontFamily="regular"
                        InputLeftElement={
                            <IconInput icon={<Ionicons name="ios-lock-closed-outline" />} />
                        }
                        InputRightElement={
                            <Button roundedRight={25} roundedLeft={3} onPress={() => setShowPassword(!showPassword)}>
                                {showPassword ? <Ionicons size={25} color="white" name="ios-eye-off-outline" /> : <Ionicons size={25} color="white" name="ios-eye-outline" />}
                            </Button>
                        }
                        type={showPassword ? "text" : "password"}
                        value={form_data.password}
                        onChangeText={(text) => form_data.setPassword(text)}
                        variant="rounded"
                        placeholder="Password"
                    />
                </Stack>

                <Button
                    mt={10}
                    w="100%"
                    onPress={() => form_data.onRegister()}
                    isLoading={form_data.loading}
                    isLoadingText={<TextButton text="Register" />}>
                    <TextButton text="Register" />
                </Button>

                <View style={{ flexDirection: 'column-reverse', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Sudah punya akun ? </Text>
                        <Text type="bold" style={{ color: 'green', padding: 5 }} onPress={() => props.navigation.goBack()}>Login </Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default Register
