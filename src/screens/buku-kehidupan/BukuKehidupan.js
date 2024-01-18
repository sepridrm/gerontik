import React, { useState } from 'react'
import { getSize, styles } from '../../utils/helpers'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import TextButton from '../../components/TextButton'
import { Text, Stack, FormControl, Input, Button, HStack, Icon, Fab, NativeBaseProvider } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { initials } from './initials';


const BukuKehidupan = ({ form_data }) => {
    const data = initials(form_data.bukukehidupan)

    const [page, setPage] = useState(0)
    const [key, setKey] = useState(data[0][1].length)
    const [saudara, setSaudara] = useState(data[0][1].length == 6 ? 0 : data[0][1].length - 7)

    const addHandler = () => {
        const _inputs = [...data[page][1]];
        _inputs.push(
            { label: `Nama saudara ke ${saudara + 1}`, placeholder: `Nama saudara ke ${saudara + 1}`, value: '', key: key },
            { label: `Pekerjaan saudara ke ${saudara + 1}`, placeholder: `Pekerjaan saudara ke ${saudara + 1}`, value: '', key: key + 1 });
        data[page][2](_inputs);
        setKey(key + 2);
        setSaudara(saudara + 1);
    }

    const deleteHandler = () => {
        const _inputs = data[page][1].filter(val => val.key != key - 1 && val.key != key - 2);
        data[page][2](_inputs);
        setKey(key - 2);
        setSaudara(saudara - 1);
    }

    const onChange = (text, key) => {
        const _inputs = [...data[page][1]];
        _inputs[key].value = text;
        data[page][2](_inputs);
    }

    return (
        <NativeBaseProvider>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
                <View style={[styles.publicContainer, { paddingBottom: 100 }]}>
                    <Text fontFamily="bold" fontSize={25}>{`${page + 1}. ${data[page][0]}`}</Text>
                    <FormControl isRequired mt={5}>
                        <Stack space={2}>
                            {
                                data[page][1].map((element, index) => (
                                    <View key={index}>
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
                                ))
                            }
                            <HStack mt={5} justifyContent="space-around">
                                {page == 0 ?
                                    <Button
                                        width="45%"
                                        onPress={addHandler}>
                                        <TextButton text="Tambah Saudara" />
                                    </Button>
                                    : null
                                }

                                {page == 0 && saudara != 0 ?
                                    <Button
                                        width="45%"
                                        bg="secondary.600"
                                        onPress={deleteHandler}>
                                        <TextButton text="Hapus Saudara" />
                                    </Button>
                                    : null
                                }
                            </HStack>
                        </Stack>
                    </FormControl>
                    {page > 0 ?
                        <Fab
                            placement="bottom-left"
                            onPress={() => setPage(page - 1)}
                            position="absolute"
                            icon={<Icon color="white" as={<Ionicons name="ios-arrow-back-outline" />} size="sm" />}
                        />
                        : null}

                    {page < data.length - 1 ?
                        <Fab
                            placement="bottom-right"
                            onPress={() => setPage(page + 1)}
                            position="absolute"
                            icon={<Icon color="white" as={<Ionicons name="ios-arrow-forward-outline" />} size="sm" />}
                        />
                        : null}

                    <Fab
                        placement="bottom-left"
                        ml={getSize.widthScreen / 2.45}
                        onPress={() => form_data.onSave(data, setPage, page)}
                        position="absolute"
                        disabled={form_data.loading}
                        icon={form_data.loading ? <ActivityIndicator color="white" /> :
                            <Icon color="white" as={<Ionicons name="ios-cloud-upload-outline" />} size="sm" />}
                    />
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default BukuKehidupan