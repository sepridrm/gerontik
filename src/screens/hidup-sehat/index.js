import React, { useState, useEffect } from 'react'
import HidupSehat from './HidupSehat'
import { useToast } from 'native-base'
import { styles } from '../../utils/helpers';
import { View } from 'react-native'
import { apis } from '../../utils/apis';

const index = ({ props, nextPage }) => {
    const [hidupsehat, setHidupSehat] = useState(null)
    const [loading, setLoading] = useState(false)
    const [first_loading, setFirstLoading] = useState(true)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getHidupSehat();
    }, [])

    async function getHidupSehat() {
        const res = await apis.get('hidup-sehat/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setHidupSehat(res.data)
            setFirstLoading(false)
        }
    }

    async function onSave(data) {
        setLoading(true)
        const dataPost = {
            id_pasien: pasien.id,
            data: JSON.stringify(data)
        }
        const res = await apis.post('hidup-sehat', dataPost, toast, setLoading)
        if (res.status == 'Ok') {
            nextPage();
        }
    }

    const form_data = {
        hidupsehat,
        loading,
        onSave
    }

    return (
        !first_loading ?
            <HidupSehat
                props={props}
                form_data={form_data}
            />
            : <View style={styles.publicContainer} />
    )
}

export default index
