import React, { useState, useEffect } from 'react'
import PSM from './PSM'
import { useToast } from 'native-base'
import { styles } from '../../utils/helpers';
import { View } from 'react-native'
import { apis } from '../../utils/apis';

const index = (props) => {
    const [psm, setPsm] = useState(null)
    const [loading, setLoading] = useState(false)
    const [first_loading, setFirstLoading] = useState(true)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getPsm();
    }, [])

    async function getPsm() {
        const res = await apis.get('psm/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setPsm(res.data)
            setFirstLoading(false)
        }
    }

    async function onSave(data) {
        setLoading(true)
        const dataPost = {
            id_pasien: pasien.id,
            data: JSON.stringify(data)
        }
        await apis.post('psm', dataPost, toast, setLoading)
    }

    const form_data = {
        psm,
        loading,
        onSave
    }

    return (
        !first_loading ?
            <PSM
                props={props}
                form_data={form_data}
            />
            : <View style={styles.publicContainer} />
    )
}

export default index
