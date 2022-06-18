import React, { useLayoutEffect } from 'react'
import { View, FlatList, TouchableOpacity, Image } from 'react-native'
// import Text from '../../components/CustomText'
import { styles, getUrl, getSize } from '../../utils/helpers';
import OptionHeader from '../../components/OptionHeader';
import { NativeBaseProvider, VStack, Box, Avatar, Text, Modal, Button, Fab, Icon, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Moment from 'moment'
import { Loading } from '../../components/Loading';

const Home = ({ props, form_data }) => {
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <OptionHeader ionicon="ios-people-circle-outline" navigation={props.navigation} toView="Profile" />
            ),
        });
    }, [props.navigation]);

    const ItemPasien = item => {
        return (
            <Box width={getSize.widthScreen / 2} p={4} alignItems="center">
                <TouchableOpacity onPress={() => props.navigation.navigate('Menu', { pasien: item })}>
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
                {props.PASIENS.length > 0 ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={props.PASIENS}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) =>
                            ItemPasien(item)
                        }
                    />
                    :
                    <VStack>
                        <Image
                            resizeMethod='resize'
                            source={require('../../../assets/page_not_found.png')}
                            style={{ resizeMode: 'stretch', width: '100%', height: '50%' }}
                        />
                        <Text fontFamily="semi-bold" fontSize="lg" textAlign="center">Tidak ada data pasien</Text>
                    </VStack>
                }

                {props.USER.id_perawat ?
                    <Fab
                        placement="bottom-left"
                        onPress={() => form_data.setOpen(true)}
                        position="absolute"
                        label={<Text type="semi-bold" style={{ color: 'white' }}>Evaluasi</Text>}
                        icon={<Icon color="white" as={<Ionicons name="ios-add-outline" />} size="sm" />}
                    /> : null
                }

                <Fab
                    placement="bottom-right"
                    onPress={() => props.navigation.navigate('Pasien')}
                    position="absolute"
                    label={<Text type="semi-bold" style={{ color: 'white' }}>Tambah pasien</Text>}
                    icon={<Icon color="white" as={<Ionicons name="ios-add-outline" />} size="sm" />}
                />
            </View>
            <Loading showModal={form_data.loading} />
            <Modal isOpen={form_data.isOpen} size="md">
                <Modal.Content maxWidth="400px">
                    <Modal.Header>Silahkan masukkan ID Perawat yang menginput pasien</Modal.Header>
                    <Modal.Body>
                        <VStack space={2}>
                            <Input
                                value={form_data.id_perawat}
                                onChangeText={(text) => form_data.setIdPerawat(text)}
                                fontFamily="regular"
                                variant="underlined"
                                placeholder="ID Perawat"
                            />
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    form_data.setOpen(false)
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    form_data.getEvaluasi()
                                }}
                            >
                                Oke
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </NativeBaseProvider>
    )
}

export default Home
