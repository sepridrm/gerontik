import React from 'react'
import { View } from 'react-native'
import Text from '../../components/CustomText'
import { FormControl, Stack, Input, Fab, Icon, SectionList, Box, VStack, HStack, Divider, Actionsheet, useDisclose, Button, NativeBaseProvider } from 'native-base'
import { getSize } from '../../utils/helpers'
import { Ionicons } from '@expo/vector-icons';
import Moment from 'moment'
import TextButton from '../../components/TextButton';

const KeluhanTindakan = ({ props, form_data }) => {
    const { isOpen, onOpen, onClose } = useDisclose()

    let list
    if (form_data.data)
        list = <SectionList
            sections={form_data.data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index, section }) => (
                <VStack>
                    <Box pl={10} py={3} bg="white">
                        <HStack space={1}>
                            <Text type="semi-bold">{index + 1}.</Text>
                            <VStack>
                                <HStack pr={5}>
                                    <Text type="semi-bold">Keluhan    :  </Text>
                                    <Text style={{ width: '73%' }}>{item.keluhan}</Text>
                                </HStack>
                                <HStack>
                                    <Text type="semi-bold">Tindakan :  </Text>
                                    <Text style={{ width: '73%' }}>{item.tindakan}</Text>
                                </HStack>
                            </VStack>
                        </HStack>
                    </Box>
                    <Divider />
                    <Box bg="white" height={section.index == form_data.data.length - 1 && index == section.data.length - 1 ? 120 : null} />
                </VStack>
            )}
            renderSectionHeader={({ section }) => (
                <Box
                    bg="gray.200"
                    px={5}
                    py={2}>
                    <Text type="bold">{Moment(section.date).format('LL')}</Text>
                </Box>
            )}
        />

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <FormControl isRequired>
                        <Stack space={2} p={5}>
                            <View>
                                <FormControl.Label><Text>Keluhan</Text></FormControl.Label>
                                <Input
                                    multiline
                                    value={form_data.keluhan}
                                    onChangeText={(text) => form_data.setKeluhan(text)}
                                    fontFamily="regular"
                                    variant="underlined"
                                    placeholder="Keluhan pasien"
                                />
                            </View>
                            <View>
                                <FormControl.Label><Text>Tindakan</Text></FormControl.Label>
                                <Input
                                    multiline
                                    value={form_data.tindakan}
                                    onChangeText={(text) => form_data.setTindakan(text)}
                                    fontFamily="regular"
                                    variant="underlined"
                                    placeholder="Tindakan perawat"
                                />
                            </View>
                            <Button
                                mt={2}
                                mb={3}
                                w="60%"
                                onPress={() => form_data.onSave(onClose)}
                                isLoading={form_data.loading}
                                isLoadingText={<TextButton text="Simpan" />}>
                                <TextButton text="Simpan" />
                            </Button>
                        </Stack>
                    </FormControl>
                </Actionsheet.Content>
            </Actionsheet>

            {list}

            <Fab
                placement="bottom-left"
                ml={getSize.widthScreen / 3}
                onPress={onOpen}
                position="absolute"
                label={<Text type="semi-bold" style={{ color: 'white' }}>Catatan</Text>}
                icon={<Icon color="white" as={<Ionicons name="ios-add-outline" />} size="sm" />}
            />
        </View>
    )
}

export default KeluhanTindakan
