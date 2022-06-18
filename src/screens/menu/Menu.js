import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { getSize, styles } from '../../utils/helpers'
import { getUrl, validURL } from '../../utils/helpers'
import { HStack, VStack, Text, Divider, Avatar, Box, Modal, Button } from 'native-base'
import Moment from 'moment'
import { Loading } from '../../components/Loading'
import { Ionicons } from '@expo/vector-icons'

const Menu = ({ props, form_data }) => {

    const ItemMenu = item => {
        return (
            <Box width={getSize.widthScreen / 2} p={4} alignItems="center">
                <TouchableOpacity onPress={() => validURL(item.nav) ? form_data.cekReport(item.nav) : props.navigation.navigate(item.nav, { pasien: form_data.pasien })}>
                    <Box border={1} py={2} borderRadius={10} borderColor="#DDDDDD" width="100%">
                        <VStack space={2} px={3} alignItems="center">
                            <Avatar
                                size="lg"
                                source={null}>
                                {item.code}
                            </Avatar>
                            <Text textAlign="center" fontFamily="semi-bold">{item.title}</Text>
                        </VStack>
                    </Box>
                </TouchableOpacity>
            </Box>
        )
    }

    let ItemSkrining = [];
    let hasil_skrining = false;
    let counter = 0;
    Object.keys(form_data.skrining).forEach(function (key) {
        if (key === 'Status Kesehatan Saat Ini') {
            if (form_data.skrining[key] === 'Sedang mengalami masalah kesehatan')
                hasil_skrining = true;

            ItemSkrining.push(
                <Text key={key}>{key} : <Text style={{ color: form_data.skrining[key] === 'Sedang mengalami masalah kesehatan' ? 'red' : 'black' }}>{form_data.skrining[key]} </Text></Text>
            )
        } else {
            ItemSkrining.push(
                <Text key={key}>{key} : {form_data.skrining[key]} </Text>
            )
        }

        if (key === 'Anjuran Hidup Sehat') {
            if (form_data.skrining[key] > 4)
                hasil_skrining = true;

            if (form_data.skrining[key] !== 'Belum ada data')
                ItemSkrining.push(
                    <Text style={{ marginLeft: 15, color: form_data.skrining[key] > 4 ? 'red' : 'black' }}>{form_data.skrining[key] > 4 ? 'Abnormal' : 'Normal'}</Text>
                )
        }
        if (key === 'Pengkajian Status Mental') {
            if (form_data.skrining[key] < 23)
                hasil_skrining = true;

            if (form_data.skrining[key] !== 'Belum ada data')
                ItemSkrining.push(
                    <Text style={{ marginLeft: 15, color: form_data.skrining[key] < 23 ? 'red' : 'black' }}>{form_data.skrining[key] < 23 ? 'Kelainan kognitif' : 'Tidak ada kelainan kognitif'}</Text>
                )
        }
        if (key === 'Pengkajian Resiko Jatuh') {
            if (form_data.skrining[key] > 45)
                hasil_skrining = true;

            if (form_data.skrining[key] !== 'Belum ada data')
                ItemSkrining.push(
                    <Text style={{ marginLeft: 15, color: form_data.skrining[key] > 45 ? 'red' : 'black' }}>{form_data.skrining[key] > 45 ? 'Resiko tinggi' : 'Resiko rendah'}</Text>
                )
        }

        if (form_data.skrining[key] !== 'Belum ada data')
            counter++

    })

    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
                <HStack space={2} alignItems="center" p={4}>
                    <Avatar
                        size="lg"
                        source={form_data.pasien.path_foto ? { uri: getUrl.baseURLImage + form_data.pasien.path_foto } : null}>
                        <Text fontFamily="regular" style={{ color: 'white' }}>{form_data.pasien.nama.substr(0, 1)}</Text>
                    </Avatar>
                    <VStack width={getSize.widthScreen / 1.5}>
                        <HStack>
                            <Text style={{ flexGrow: 1 }} fontFamily="bold">{form_data.pasien.nama}</Text>
                            <TouchableOpacity onPress={() => form_data.getSkrining()}>
                                <Ionicons color="red" p={1} size={25} name="md-information-circle" />
                            </TouchableOpacity>
                        </HStack>
                        <Text fontFamily="light" style={{ fontSize: 15 }}>{` ${form_data.pasien.tempat_lahir}/${Moment(form_data.pasien.tanggal_lahir).format('LL')}`}</Text>
                        <Text noOfLines={4} fontFamily="light" style={{ fontSize: 15 }}>{`  ${form_data.pasien.jenis_kelamin}, Agama ${form_data.pasien.agama}`}</Text>
                        <Text noOfLines={4} fontFamily="light" style={{ fontSize: 15 }}>{` Alamat ${form_data.pasien.alamat}, Pendidikan ${form_data.pasien.pendidikan}, Pekerjaan ${form_data.pasien.pekerjaan}, Status ${form_data.pasien.status}`}</Text>
                    </VStack>
                </HStack>
                <Divider />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={form_data.menu}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        ItemMenu(item)
                    }
                />
                <Loading showModal={form_data.loading} />
            </View>
            <Modal isOpen={form_data.isOpen} size="md">
                <Modal.Content maxWidth="400px">
                    <Modal.Header>Status kesehatan pasien (Skrining)</Modal.Header>
                    <Modal.Body>
                        <VStack>
                            {ItemSkrining}

                            <Text fontFamily="light" mt={4}>Kesimpulan</Text>
                            <Text fontFamily="semi-bold" fontSize="xl" style>{hasil_skrining ? 'Pasien dalam masalah kesehatan' : counter === 0 ? 'Pasien dalam keadaan sehat' : 'Belum ada data'}</Text>
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
                                Oke
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    )
}

export default Menu
