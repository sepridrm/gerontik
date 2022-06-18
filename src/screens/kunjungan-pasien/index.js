import { useToast } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { apis } from '../../utils/apis'
// import { getTitleToast } from '../../utils/helpers'
import { initials } from './initials'
import KunjunganPasien from './KunjunganPasien'

const index = ({ props }) => {
    const [loading, setLoading] = useState(false)
    const [kunjunganpasien, setKunjunganPasien] = useState(null)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getKunjunganPasien();
    }, [])

    async function getKunjunganPasien(){
        const res = await apis.get('kunjungan-pasien/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setKunjunganPasien(res.data)
        }
    }

    async function onSave(data, setData){
        // let invalid = false
        // data.forEach(element => {
        //     if(!element.value)
        //     invalid = 'Silahkan lengkapi data.'
        // });

        // if(invalid){
        //     return toast.show({
        //         title: getTitleToast.validation,
        //         description: invalid,
        //         status: "danger",
        //     })
        // }

        setLoading(true)
        const dataPost = {
            id_pasien : pasien.id,
            data: JSON.stringify(data)
        }
        const res = await apis.post('kunjungan-pasien', dataPost, toast, setLoading)
        if (res.status == 'Ok') {
            getKunjunganPasien()
            setData(initials)
        }

    }

    const alertSave = (data, setData) => {
        Alert.alert('Konfirmasi', 'Pastikan data yang diisi sudah benar, data yang telah disimpan tidak dapat diubah. Lanjutkan simpan data ?', [
            { text: 'Iya', onPress: () => onSave(data, setData) },
            { text: 'Tidak' },
        ])
    }

    const form_data = {
        kunjunganpasien,
        loading, setLoading,
        alertSave
    }

    return (
        <KunjunganPasien
            props={props}
            form_data={form_data}
        />
    )
}

export default index
