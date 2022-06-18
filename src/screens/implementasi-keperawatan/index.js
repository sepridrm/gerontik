import { useToast } from 'native-base'
import React from 'react'
import { useState, useEffect } from 'react'
import { apis } from '../../utils/apis'
import { getTitleToast } from '../../utils/helpers'
import ImplementasiKeperawatan from './ImplementasiKeperawatan'

const index = ({ props }) => {
    const [implementasi_keperawatan, setImplementasiKeperawatan] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getImplementasiKeperawatan();
    }, [])

    async function getImplementasiKeperawatan() {
        setLoading(true)
        const res = await apis.get('implementasi-keperawatan/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setData(groupByDate(res.data));
        }
    }

    const validation = () => {
        let warning;
        (!implementasi_keperawatan) ? warning = "Silahkan lengkapi data." : warning = false

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
        const id_perawat = props.USER.id_perawat ? props.USER.id : null
        const dataPost = {
            id_pasien: pasien.id,
            id_perawat: id_perawat,
            implementasi_keperawatan: implementasi_keperawatan,
        }
        const res = await apis.post('implementasi-keperawatan', dataPost, toast, setLoading)
        if (res.status == 'Ok') {
            onClose()
            resetValue()
            getImplementasiKeperawatan()
        }
    }

    const resetValue = () => {
        setImplementasiKeperawatan('')
    }

    const form_data = {
        data,
        implementasi_keperawatan, setImplementasiKeperawatan,
        loading,
        onSave
    }

    return (
        <ImplementasiKeperawatan
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
