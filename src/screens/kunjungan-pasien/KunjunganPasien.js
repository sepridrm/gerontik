import React, { useState } from 'react'
import { getSize, styles } from '../../utils/helpers'
import { View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Text, Stack, FormControl, Input, Icon, Fab, Select, CheckIcon, HStack, Box, Square, useTheme } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { initials } from './initials';
import Moment from 'moment'

const KunjunganPasien = ({ props, form_data }) => {
    const [data, setData] = useState(initials)
    const [kunjunganke, setKunjunganke] = useState(null)

    const onChange = (text, key) => {
        const _inputs = [...data];
        _inputs[key].value = text;
        setData(_inputs);
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
            <View style={styles.publicContainer}>
                {form_data.kunjunganpasien ?
                    form_data.kunjunganpasien.length > 0 ?
                        <Box mb={7} px={3} py={2} bg="success.600" borderRadius={5} width="100%">
                            <HStack space={1}>
                                <Text fontFamily="regular" fontSize={17} width="40%" color="white">Lihat kunjungan pasien ke</Text>
                                <ScrollView
                                    horizontal>
                                    {form_data.kunjunganpasien.map((element, index) => (
                                        <TouchableOpacity style={{ marginRight: 3 }} key={index + element} onPress={() => {
                                            setKunjunganke(index + 1)
                                            setData(JSON.parse(element.data))
                                        }}>
                                            <Square borderRadius={7} size="xs" bg={ index+1 == kunjunganke ? "violet.400" : "white"}>
                                                    <Text color={ index+1 == kunjunganke ? "white" : "black"} fontFamily="semi-bold">{index + 1}</Text>
                                            </Square>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </HStack>
                        </Box>
                        : null : null}

                <Text fontFamily="bold" fontSize={20}>{kunjunganke ? `Kunjungan pasien ke ${kunjunganke}` : "Tambah kunjungan pasien"}</Text>
                <Text fontFamily="semi-bold">{kunjunganke ? `Tanggal ${Moment(form_data.kunjunganpasien[kunjunganke - 1].created_at).format('LL')}` : `Tanggal ${Moment().format('LL')}`}</Text>
                <FormControl isRequired mt={5}>
                    <Stack space={2}>
                        {
                            data.map((element, index) => (
                                element.type == "input" ?
                                    <View key={index} style={{ paddingBottom: data.length - 1 == index ? 100 : 0 }}>
                                        <FormControl.Label><Text fontFamily="regular">{element.label}</Text></FormControl.Label>
                                        <Input
                                            keyboardType={element.keyboard ? element.keyboard : 'default'}
                                            multiline
                                            value={element.value}
                                            onChangeText={(text) => onChange(text, element.key)}
                                            fontFamily="regular"
                                            variant="underlined"
                                            placeholder={element.placeholder}
                                        />
                                    </View>
                                    :
                                    <View key={index} style={{ paddingBottom: data.length - 1 == index ? 100 : 0 }}>
                                        <FormControl.Label><Text>{element.label}</Text></FormControl.Label>
                                        <Select
                                            selectedValue={element.value}
                                            placeholder={element.placeholder}
                                            onValueChange={(value) => onChange(value, element.key)}
                                            _selectedItem={{
                                                bg: "cyan.600",
                                                endIcon: <CheckIcon size={4} />,
                                            }}
                                        >
                                            {element.item.map((item, index) => (
                                                <Select.Item key={item + index} label={item.value} value={item.value} />
                                            ))}
                                        </Select>
                                    </View>
                            ))
                        }
                    </Stack>
                </FormControl>
                <Fab
                    placement="bottom-left"
                    ml={getSize.widthScreen / 2.5}
                    onPress={() => kunjunganke ? (setData(initials), setKunjunganke(null)) : form_data.alertSave(data, setData)}
                    position="absolute"
                    disabled={form_data.loading}
                    icon={form_data.loading ? <ActivityIndicator color="white" /> :
                        <Icon color="white" as={<Ionicons name={kunjunganke ? "ios-add-outline" : "ios-cloud-upload-outline"} />} size="sm" />}
                />
            </View>
        </ScrollView>
    )
}

export default KunjunganPasien
