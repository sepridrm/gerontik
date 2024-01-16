import React from 'react'
import { View, ScrollView } from 'react-native'
import Text from '../../components/CustomText'
import { FormControl, Stack, Input, Button, Select, CheckIcon, Avatar } from 'native-base'
import { styles } from '../../utils/helpers'
import TextButton from '../../components/TextButton'
import DatePicker from 'react-native-datepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Pasien = ({ props, form_data }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.publicContainer}>
                <Text type="bold" style={{ fontSize: 25 }}>Tambah data pasien</Text>
                <Text type="thin">Pasien akan menjadi tanggung jawab perawat yang menambah</Text>

                <FormControl isRequired mt={5}>
                    <Stack space={2}>
                        <View>
                            <FormControl.Label><Text>Photo</Text></FormControl.Label>
                            <TouchableOpacity onPress={() => props.navigation.navigate('OpenCamera', { setFoto: form_data.setFoto })}>
                                <Avatar
                                    size="xl"
                                    source={form_data.path_foto ? { uri: form_data.path_foto.uri } : null}>
                                    <Text style={{ color: 'white' }}>Tap me</Text>
                                </Avatar>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <FormControl.Label><Text>Nama</Text></FormControl.Label>
                            <Input
                                value={form_data.nama}
                                onChangeText={(text) => form_data.setNama(text)}
                                fontFamily="regular"
                                mt={-3}
                                variant="underlined"
                                placeholder="Nama pasien"
                            />
                        </View>

                        <View>
                            <FormControl.Label><Text>Tanggal lahir</Text></FormControl.Label>
                            <DatePicker
                                style={{ width: '100%' }}
                                date={form_data.tanggal_lahir}
                                mode="datetime"
                                display="default"
                                confirmBtnText="Ok"
                                cancelBtnText="Cancel"
                                format="LL"
                                onDateChange={(date) => form_data.setTanggalLahir(date)}
                            />

                            <DatePicker
                                modal
                                mode="date"
                                open={open}
                                date={tgl_lahir}
                                onDateChange={handleDateChangeTglLahir}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setTgllahir(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </View>

                        <View>
                            <FormControl.Label><Text>Tempat lahir</Text></FormControl.Label>
                            <Input
                                value={form_data.tempat_lahir}
                                onChangeText={(text) => form_data.setTempatLahir(text)}
                                fontFamily="regular"
                                mt={-3}
                                variant="underlined"
                                placeholder="Tempat lahir pasien"
                            />
                        </View>

                        <View>
                            <FormControl.Label><Text>Jenis Kelamin</Text></FormControl.Label>
                            <Select
                                selectedValue={form_data.jenis_kelamin}
                                placeholder="Jenis kelamin pasien"
                                onValueChange={(value) => form_data.setJenisKelamin(value)}
                                _selectedItem={{
                                    bg: "cyan.600",
                                    endIcon: <CheckIcon size={4} />,
                                }}
                            >
                                <Select.Item label="Laki-laki" value="Laki-laki" />
                                <Select.Item label="Perempuan" value="Perempuan" />
                            </Select>
                        </View>

                        <View>
                            <FormControl.Label><Text>Agama</Text></FormControl.Label>
                            <Select
                                selectedValue={form_data.agama}
                                placeholder="Agama pasien"
                                onValueChange={(value) => form_data.setAgama(value)}
                                _selectedItem={{
                                    bg: "cyan.600",
                                    endIcon: <CheckIcon size={4} />,
                                }}
                            >
                                <Select.Item label="Islam" value="Islam" />
                                <Select.Item label="Katolik" value="Katolik" />
                                <Select.Item label="Kristen" value="Kristen" />
                                <Select.Item label="Hindu" value="Hindu" />
                                <Select.Item label="Budha" value="Budha" />
                            </Select>
                        </View>

                        <View>
                            <FormControl.Label><Text>Alamat</Text></FormControl.Label>
                            <Input
                                value={form_data.alamat}
                                onChangeText={(text) => form_data.setAlamat(text)}
                                fontFamily="regular"
                                mt={-3}
                                variant="underlined"
                                placeholder="Alamat pasien"
                            />
                        </View>

                        <View>
                            <FormControl.Label><Text>Pendidikan</Text></FormControl.Label>
                            <Select
                                selectedValue={form_data.pendidikan}
                                placeholder="Pendidikan pasien"
                                onValueChange={(value) => form_data.setPendidikan(value)}
                                _selectedItem={{
                                    bg: "cyan.600",
                                    endIcon: <CheckIcon size={4} />,
                                }}
                            >
                                <Select.Item label="SD" value="SD" />
                                <Select.Item label="SMP" value="SMP" />
                                <Select.Item label="SMA" value="SMA" />
                                <Select.Item label="D1" value="D1" />
                                <Select.Item label="D2" value="D2" />
                                <Select.Item label="D3" value="D3" />
                                <Select.Item label="D4" value="D4" />
                                <Select.Item label="S1" value="S1" />
                                <Select.Item label="S2" value="S2" />
                                <Select.Item label="S3" value="S3" />
                            </Select>
                        </View>

                        <View>
                            <FormControl.Label><Text>Pekerjaan</Text></FormControl.Label>
                            <Input
                                value={form_data.pekerjaan}
                                onChangeText={(text) => form_data.setPekerjaan(text)}
                                fontFamily="regular"
                                mt={-3}
                                variant="underlined"
                                placeholder="Pekerjaan pasien"
                            />
                        </View>

                        <View>
                            <FormControl.Label><Text>Status Perkawinan</Text></FormControl.Label>
                            <Select
                                selectedValue={form_data.status}
                                placeholder="Status pasien"
                                onValueChange={(value) => form_data.setStatus(value)}
                                _selectedItem={{
                                    bg: "cyan.600",
                                    endIcon: <CheckIcon size={4} />,
                                }}
                            >
                                <Select.Item label="Menikah" value="Menikah" />
                                <Select.Item label="Janda" value="Janda" />
                                <Select.Item label="Duda" value="Duda" />
                            </Select>
                        </View>
                    </Stack>
                </FormControl>

                <Button
                    mt={10}
                    w="60%"
                    onPress={() => form_data.onSave()}
                    isLoading={form_data.loading}
                    isLoadingText={<TextButton text="Simpan" />}>
                    <TextButton text="Simpan" />
                </Button>
            </View>
        </ScrollView>
    )
}

export default Pasien
