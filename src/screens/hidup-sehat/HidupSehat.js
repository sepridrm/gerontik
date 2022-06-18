import React from 'react'
import { TouchableOpacity, ActivityIndicator, View } from 'react-native'
import { SectionList, Box, HStack, Fab, Icon, VStack } from 'native-base'
import Text from '../../components/CustomText'
import { Ionicons } from '@expo/vector-icons';
import { initials } from './initials';
import { getSize } from '../../utils/helpers';

const HidupSehat = ({ form_data }) => {
    const form = initials(form_data.hidupsehat)

    const onChoose = (index, value, key) => {
        const _inputs = [...form.data];
        _inputs[index].data[key].value = !value;
        form.setData(_inputs);
    }

    return (
        <View>
            <SectionList
                sections={form.data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item, index, section }) => (
                    <VStack>
                        <TouchableOpacity onPress={() => onChoose(section.key, item.value, item.key)}>
                            <Box px={7} py={4} bg={item.value ? "success.300" : 'white'}>
                                <HStack space={1}>
                                    {item.value ? <Ionicons name="ios-checkmark-outline" size={16} /> : null}
                                    <Text>{item.name}</Text>
                                </HStack>
                            </Box>
                        </TouchableOpacity>
                        <Box bg="white" height={section.key == form.data.length - 1 && index == section.data.length - 1 ? 120 : null} />
                    </VStack>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    title ?
                        <Box
                            bg="gray.100"
                            px={5}
                            py={2}>
                            <Text type="semi-bold">{title}</Text>
                        </Box>
                        : null
                )}
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

export default HidupSehat
