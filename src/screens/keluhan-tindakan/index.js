import { useToast } from 'native-base'
import React from 'react'
import { useState, useEffect } from 'react'
import { apis } from '../../utils/apis'
import { getTitleToast } from '../../utils/helpers'
import KeluhanTindakan from './KeluhanTindakan'

const index = ({ props }) => {
    const [keluhan, setKeluhan] = useState('')
    const [tindakan, setTindakan] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getKeluhanTindakan();
    }, [])

    async function getKeluhanTindakan() {
        setLoading(true)
        const res = await apis.get('keluhan-tindakan/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setData(groupByDate(res.data));
        }
    }

    const validation = () => {
        let warning;
        (!keluhan || !tindakan) ? warning = "Silahkan lengkapi data." : warning = false

        return warning;
    }

    async function onSave(onClose) {
        if (validation()) {
            onClose()
            return toast.show({
                title: getTitleToast.validation,
                description: validation(),
                status: "danger",
            })
        }

        setLoading(true)
        const dataPost = {
            id_pasien: pasien.id,
            keluhan: keluhan,
            tindakan: tindakan
        }
        const res = await apis.post('keluhan-tindakan', dataPost, toast, setLoading)
        if (res.status == 'Ok') {
            onClose()
            resetValue()
            getKeluhanTindakan()
        }
    }

    const resetValue = () => {
        setKeluhan('')
        setTindakan('')
    }

    const form_data = {
        data,
        keluhan, setKeluhan,
        tindakan, setTindakan,
        loading,
        onSave
    }

    return (
        <KeluhanTindakan
            props={props}
            form_data={form_data}
        />
    )
}

const groupByDate = (data) => {
    const groups = data.reduce((acc, cur) => {
        const date = cur.created_at.split('T')[0];
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(cur);
        return acc;
    }, {});

    const groupArrays = Object.keys(groups).map((date, index) => {
        return {
            date,
            index: index,
            data: groups[date]
        };
    });

    return groupArrays;
}

export default index
