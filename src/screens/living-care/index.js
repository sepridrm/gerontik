import { useToast } from 'native-base'
import React, { useState, useEffect } from 'react'
import { styles } from '../../utils/helpers'
import { apis } from '../../utils/apis'
import LivingCare from './LivingCare'
import { View } from 'react-native'

const index = (props) => {
    const [livingcare, setLivingCare] = useState(null)
    const [loading, setLoading] = useState(false)
    const [first_loading, setFirstLoading] = useState(true)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getLivingCare();
    }, [])

    async function getLivingCare() {
        const res = await apis.get('living-care/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setLivingCare(res.data)
            setFirstLoading(false)
        }
    }

    async function onSave(data, setPage, page) {
        setLoading(true)
        const dataPost = {
            id_pasien: pasien.id,
            column: data[page][3],
            data: JSON.stringify(data[page][1])
        }
        const res = await apis.post('living-care', dataPost, toast, setLoading)
        if (res.status == 'Ok') {
            page + 1 < data.length ?
                setPage(page + 1)
                : null
        }
    }

    const form_data = {
        livingcare, setLivingCare,
        loading, setLoading,
        onSave
    }

    return (
        !first_loading ?
            <LivingCare
                props={props}
                form_data={form_data}
            />
            :
            <View style={styles.publicContainer} />
    )

}

export default index
