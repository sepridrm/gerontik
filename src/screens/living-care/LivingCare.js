import React, { useState } from 'react'
import { getSize, styles } from '../../utils/helpers'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { Text, Stack, FormControl, Input, Button, Icon, Fab, NativeBaseProvider } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { initials } from './initials';

const LivingCare = ({ form_data }) => {
    const data = initials(form_data.livingcare)

    const [page, setPage] = useState(0)

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
                        ml={getSize.widthScreen / 2.5}
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

export default LivingCare
