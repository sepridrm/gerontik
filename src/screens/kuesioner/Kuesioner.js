import React, { useState } from 'react'
import { TouchableOpacity, ActivityIndicator, View } from 'react-native'
import { SectionList, Box, HStack, Fab, Icon, VStack, NativeBaseProvider, Divider } from 'native-base'
import Text from '../../components/CustomText'
import { Ionicons } from '@expo/vector-icons';
import { initials } from './initials';
import { getSize } from '../../utils/helpers';

const Kuesioner = ({ props, form_data }) => {
    const data = initials(form_data.kuesioner)

    const [page, setPage] = useState(0)

    const onChoose = (index, value, key) => {
        const _inputs = [...data[page][1]];
        _inputs[index].data.forEach((element) => {
            element.selected = false;
        });
        _inputs[index].data[key].selected = !value;
        data[page][2](_inputs);
    }

    const getTotal = () => {
        data[page][1].forEach(element => {
            element.data.forEach(data => {
                if (data.selected)
                    total = total + data.value;
            });
        })
    }

    let total = 0;
    if (data[page][1])
        getTotal()

    return (
        <NativeBaseProvider>
            <View>
                <Text type="bold" style={{ fontSize: 25, backgroundColor: 'white', paddingHorizontal: 15, paddingTop: 5 }}>{`${page + 1}. ${data[page][0]}`}</Text>
                <Divider />
                <SectionList
                    sections={data[page][1]}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item, index, section }) => (
                        <VStack>
                            <TouchableOpacity onPress={() => onChoose(section.key, item.selected, item.key)}>
                                <Box px={7} py={4} bg={item.selected ? "success.300" : 'white'}>
                                    <HStack space={1}>
                                        {item.selected ? <Ionicons name="ios-checkmark-outline" size={16} /> : null}
                                        <Text>{item.name}</Text>
                                    </HStack>
                                </Box>
                            </TouchableOpacity>
                            {section.key == data[page][1].length - 1 && index == section.data.length - 1 ?
                                <VStack>
                                    <Box
                                        bg="gray.100"
                                        px={5}
                                        py={2}>
                                        <HStack>
                                            {page === 1 ?
                                                <Text type="semi-bold" style={{ flexGrow: 1 }}>Total skor salah</Text>
                                                :
                                                <Text type="semi-bold" style={{ flexGrow: 1 }}>Total skor</Text>
                                            }
                                            <Text type="bold">{total}</Text>
                                        </HStack>
                                    </Box>

                                    <Box
                                        bg="white"
                                        px={5}
                                        py={2}>
                                        <HStack>
                                            <Text type="semi-bold" style={{ flexGrow: 1 }}>Penilaian</Text>
                                            {page === 0 ?
                                                <Text type="bold">{total <= 3 ? "Disfungsi keluarga sangat tinggi" : total <= 6 ? "Disfungsi keluarga sedang" : "Disfungsi keluarga kurang"}</Text>
                                                :
                                                page === 1 ?
                                                    <Text type="bold">{total <= 2 ? "Fungsi intelektual utuh" : total <= 4 ? "Kerusakan intelektual ringan" : total <= 7 ? "Kerusakan intelektual sedang" : "Kerusakan intelektual berat"}</Text>
                                                    :
                                                    page === 2 ?
                                                        <Text type="bold">{`Ketergantungan pada ${total} fungsi tersebut`}</Text>
                                                        :
                                                        <Text type="bold">{total < 5 ? "Kemungkinan depresi kecil" : total <= 9 ? "Kemungkinan depresi" : "Depresi"}</Text>
                                            }
                                        </HStack>
                                    </Box>

                                    <Box bg="white" height={150} />
                                </VStack>
                                : null
                            }
                        </VStack>
                    )}
                    renderSectionHeader={({ section: { title, key } }) =>
                        <Box
                            bg="gray.100"
                            px={5}
                            py={2}>
                            <Text type="semi-bold">{title}</Text>
                        </Box>
                    }
                />
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
                    ml={getSize.widthScreen / 2.5}
                    onPress={() => form_data.onSave(data, setPage, page)}
                    position="absolute"
                    disabled={form_data.loading}
                    icon={form_data.loading ? <ActivityIndicator color="white" /> :
                        <Icon color="white" as={<Ionicons name="ios-cloud-upload-outline" />} size="sm" />}
                />
            </View>
        </NativeBaseProvider>
    )
}

export default Kuesioner