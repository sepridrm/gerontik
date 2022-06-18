import React, { useState, useEffect } from 'react'
import PRJ from './PRJ'
import { useToast } from 'native-base'
import { styles } from '../../utils/helpers';
import { View } from 'react-native'
import { apis } from '../../utils/apis';

const index = (props) => {
    const [prj, setPrj] = useState(null)
    const [loading, setLoading] = useState(false)
    const [first_loading, setFirstLoading] = useState(true)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getPrj();
    }, [])

    async function getPrj() {
        const res = await apis.get('prj/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setPrj(res.data)
            setFirstLoading(false)
        }
    }

    async function onSave(data) {
        setLoading(true)
        const dataPost = {
            id_pasien: pasien.id,
            data: JSON.stringify(data)
        }
        await apis.post('prj', dataPost, toast, setLoading)
    }

    const form_data = {
        prj,
        loading,
        onSave
    }

    return (
        !first_loading ?
            <PRJ
                props={props}
                form_data={form_data}
            />
            : <View style={styles.publicContainer} />
    )
}

export default index
