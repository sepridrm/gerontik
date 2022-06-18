import React from 'react'
import { TouchableOpacity, ActivityIndicator, View } from 'react-native'
import { SectionList, Box, HStack, Fab, Icon, VStack, Badge } from 'native-base'
import Text from '../../components/CustomText'
import { Ionicons } from '@expo/vector-icons';
import { initials } from './initials';
import { getSize } from '../../utils/helpers';

const PSM = ({ form_data }) => {
    const form = initials(form_data.psm)

    const onAdd = (index, value, maxValue, key) => {
        const _inputs = [...form.data];
        _inputs[index].data[key].value = value + 1 <= maxValue ? value + 1 : value;
        form.setData(_inputs);
        getTotal();
    }

    const onRemove = (index, value, key) => {
        const _inputs = [...form.data];
        _inputs[index].data[key].value = value - 1 < 0 ? value : value - 1;
        form.setData(_inputs);
        getTotal();
    }

    const getTotal = () => {
        form.data.forEach(element => {
            element.data.forEach(data => {
                total = total + data.value;
            });
        })
    }

    let total = 0;
    if (form)
        getTotal()

    return (
        <View>
            <SectionList
                sections={form.data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index, section }) => (
                    <VStack>
                        <Box px={7} py={4} bg="white">
                            <HStack space={4} style={{ width: "77%" }}>
                                <Text style={{ flexGrow: 1 }}>{item.name}</Text>
                                <HStack space={2}>
                                    {item.value === 0 ? null :
                                        <TouchableOpacity onPress={() => onRemove(section.key, item.value, item.key)}>
                                            <Badge colorScheme="danger" px={1}><Ionicons name="ios-remove-outline" size={16} /></Badge>
                                        </TouchableOpacity>
                                    }
                                    <Text type="bold">{item.value}</Text>
                                    {item.value === item.maxValue ? null :
                                        <TouchableOpacity onPress={() => onAdd(section.key, item.value, item.maxValue, item.key)}>
                                            <Badge colorScheme="success" px={1}><Ionicons name="ios-add-outline" size={16} /></Badge>
                                        </TouchableOpacity>
                                    }
                                </HStack>
                            </HStack>
                        </Box>
                        {section.key == form.data.length - 1 && index == section.data.length - 1 ?
                            <VStack>
                                <Box
                                    bg="gray.100"
                                    px={5}
                                    py={2}>
                                    <HStack>
                                        <Text type="semi-bold" style={{ flexGrow: 1 }}>Total skor</Text>
                                        <Text type="bold">{total}</Text>
                                    </HStack>
                                </Box>

                                <Box
                                    bg="white"
                                    px={5}
                                    py={2}>
                                    <HStack>
                                        <Text type="semi-bold" style={{ flexGrow: 1 }}>Single CU toff</Text>
                                        <Text type="bold">{total < 24 ? "Abnormal" : "Normal"}</Text>
                                    </HStack>
                                </Box>
                                <Box
                                    bg="gray.100"
                                    px={5}
                                    py={2}>
                                    <HStack>
                                        <Text type="semi-bold" style={{ flexGrow: 1 }}>Range</Text>
                                        <Text type="bold">{total < 21 ? "Kemungkinan demensia lebih besar" : total > 25 ? "Kemungkinan demensia lebih kecil" : "Tidak teridentifikasi"}</Text>
                                    </HStack>
                                </Box>
                                <Box
                                    bg="white"
                                    px={5}
                                    py={2}>
                                    <HStack>
                                        <Text type="semi-bold" style={{ flexGrow: 1 }}>Pendidikan</Text>
                                        <Text type="bold">{total < 21 ? "Abnormal pada tingkat pendidikan kelas 2 SMP" : total < 23 ? "Abnormal pada tingkat SMA" : "Abnormal pada tingkat Perguruan tinggi"}</Text>
                                    </HStack>
                                </Box>
                                <Box
                                    bg="gray.100"
                                    px={5}
                                    py={2}>
                                    <HStack>
                                        <Text type="semi-bold" style={{ flexGrow: 1 }}>Keparahan</Text>
                                        <Text type="bold">{total < 17 ? "Kelainan kognitif berat" : total < 23 ? "Kelainan kognitif ringan" : "Tidak ada kelainan kognitif"}</Text>
                                    </HStack>
                                </Box>

                                <Box bg="white" height={120} />
                            </VStack>
                            : null
                        }
                    </VStack>
                )}
                renderSectionHeader={({ section: { title, key } }) =>
                    <View>
                        {key === 0 ?
                            <Text style={{ backgroundColor: 'white', padding: 15 }}>
                                MMSE merupakan pemeriksaan yang mudah dan cepat dikerjakan berupa 30 point-test terhadap fungsi kognitif, dan berisikan pula uji orientasi, memori kerja, memori episodik, komprehensi bahasa, serta menyebutkan kata dan mengulang kata. Selain itu MMSE sebagai metode pemeriksaan untuk evaluasi dan konfirmasi penurunan fungsi kognitif serta dapat juga digunakan untuk memantau perjalanan penyakit.
                                Intepretasi MMSE (Folstein, 1975)
                            </Text>
                            : null}
                        {title ?
                            <Box
                                bg="gray.100"
                                px={5}
                                py={2}>
                                <Text type="semi-bold">{title}</Text>
                            </Box>
                            : null}
                    </View>
                }
            />
            <Fab
                placement="bottom-left"
                ml={getSize.widthScreen / 2.5}
                onPress={() => form_data.onSave(form.data)}
                position="absolute"
                disabled={form_data.loading}
                icon={form_data.loading ? <ActivityIndicator color="white" /> :
                    <Icon color="white" as={<Ionicons name="ios-cloud-upload-outline" />} size="sm" />}
            />
        </View>
    )
}

export default PSM
