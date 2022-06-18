import { useToast } from 'native-base'
import React, { useState, useEffect } from 'react'
import { styles } from '../../utils/helpers'
import Pengkajian from './Pengkajian'
import { View } from 'react-native'
import { apis } from '../../utils/apis'

const index = (props) => {
    const [pengkajian, setPengkajian] = useState(null)
    const [loading, setLoading] = useState(false)
    const [first_loading, setFirstLoading] = useState(true)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getPengkajian();
    }, [])

    async function getPengkajian() {
        const res = await apis.get('pengkajian/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setPengkajian(res.data)
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
        const res = await apis.post('pengkajian', dataPost, toast, setLoading)
        if (res.status == 'Ok') {
            page + 1 < data.length ?
                setPage(page + 1)
                : null
        }
    }

    const form_data = {
        pengkajian, setPengkajian,
        loading, setLoading,
        onSave
    }

    return (
        !first_loading ?
            <Pengkajian
                props={props}
                form_data={form_data}
            />
            :
            <View style={styles.publicContainer} />
    )
}

export default index
