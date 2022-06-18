import React from 'react'
import { TouchableOpacity, ActivityIndicator, View } from 'react-native'
import { SectionList, Box, HStack, Fab, Icon, VStack } from 'native-base'
import Text from '../../components/CustomText'
import { Ionicons } from '@expo/vector-icons';
import { initials } from './initials';
import { getSize } from '../../utils/helpers';

const PSM = ({ form_data }) => {
    const form = initials(form_data.prj)

    const onChoose = (index, value, key) => {
        const _inputs = [...form.data];
        _inputs[index].data.forEach((element) => {
            element.selected = false;
        });
        _inputs[index].data[key].selected = !value;
        form.setData(_inputs);
        getTotal();
    }

    const getTotal = () => {
        form.data.forEach(element => {
            element.data.forEach(data => {
                if(data.selected){
                    total = total + data.value;
                }
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
                        <TouchableOpacity onPress={() => onChoose(section.key, item.selected, item.key)}>
                            <Box px={7} py={4} bg={item.selected ? "success.300" : 'white'}>
                                <HStack space={1}>
                                    {item.selected ? <Ionicons name="ios-checkmark-outline" size={16} /> : null}
                                    <Text>{item.name}</Text>
                                </HStack>
                            </Box>
                        </TouchableOpacity>
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
                                        <Text type="semi-bold" style={{ flexGrow: 1 }}>Kesimpulan</Text>
                                        <Text type="bold">{total < 45 ? "Resiko rendah" : "Resiko tinggi"}</Text>
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
                                Morse Scale Fall/MFS MFS merupakan salah satu instrumen yang dapat digunakan untuk mengidentifikasi pasien yang berisiko jatuh. Dengan menghitung skor MFS pada pasien dapat ditentukan risiko jatuh dari pasien tersebut, sehingga dengan demikian dapat diupayakan pencegahan jatuh yang perlu dilakukan. Pengkajian resiko jatuh dilakukan pada saat pasien baru masuk ruangan,setiap shift, pernah terjadi jatuh, dilakukan bila ada perubahan status mental sesuai dengan prosedur yaitu SPO
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
