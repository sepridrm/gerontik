import React, { useLayoutEffect } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
// import Text from '../../components/CustomText'
import { getUrl, getSize } from '../../utils/helpers';
import OptionHeader from '../../components/OptionHeader';
import { NativeBaseProvider, VStack, Box, Avatar, Text, Divider } from 'native-base';
import Moment from 'moment'
import { Loading } from '../../components/Loading';
import { Ionicons } from '@expo/vector-icons'

const PasienEvaluasi = ({ props, form_data }) => {
    const ItemPasien = item => {
        return (
            <Box width={getSize.widthScreen / 2} p={4} alignItems="center">
                <TouchableOpacity onPress={() => props.navigation.navigate('Evaluasi', {pasien: item})}>
                    <Box border={1} py={2} borderRadius={10} borderColor="#DDDDDD" width="100%">
                        <VStack space={2} px={3} alignItems="center">
                            <Avatar
                                size="lg"
                                source={item.path_foto ? { uri: getUrl.baseURLImage + item.path_foto } : null}>
                                <Text fontFamily="regular" style={{ color: 'white' }}>{item.nama.substr(0, 1)}</Text>
                            </Avatar>
                            <Text fontFamily="semi-bold">{item.nama}</Text>
                            <Text noOfLines={2} textAlign="center" fontFamily="light" fontSize={15} style={{ marginTop: -13 }}>{`${item.tempat_lahir}, ${Moment(item.tanggal_lahir).format('LL')}`}</Text>
                            <Text fontFamily="light" fontSize={15} style={{ marginTop: -13 }}>{item.alamat}</Text>
                        </VStack>
                    </Box>
                </TouchableOpacity>
            </Box>
        )
    }

    return (
        <NativeBaseProvider>
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                <VStack p={4}>
                    <Text fontFamily="bold" fontSize="3xl" style>Perawat {form_data.data.perawat.nama}</Text>
                    <Text fontFamily="semi-bold" fontSize="xl" style>{form_data.data.perawat.email}</Text>
                    <Text fontFamily="regular" fontSize="lg" style><Ionicons size={23} name="ios-card-outline" /> {form_data.data.perawat.id_perawat}</Text>
                </VStack>
                <Divider />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={form_data.data.pasiens}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        ItemPasien(item)
                    }
                />
            </View>
            <Loading showModal={form_data.loading} />
        </NativeBaseProvider>
    )
}

export default PasienEvaluasi
