import { useToast } from 'native-base'
import React from 'react'
import { useState, useEffect } from 'react'
import { apis } from '../../utils/apis'
import { getTitleToast } from '../../utils/helpers'
import IntervensiKeperawatan from './IntervensiKeperawatan'

const index = ({ props }) => {
    const [intervensi_keperawatan, setIntervensiKeperawatan] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getIntervensiKeperawatan();
    }, [])

    async function getIntervensiKeperawatan() {
        setLoading(true)
        const res = await apis.get('intervensi-keperawatan/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setData(groupByDate(res.data));
        }
    }

    const validation = () => {
        let warning;
        (!intervensi_keperawatan) ? warning = "Silahkan lengkapi data." : warning = false

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
            intervensi_keperawatan: intervensi_keperawatan,
        }
        const res = await apis.post('intervensi-keperawatan', dataPost, toast, setLoading)
        if (res.status == 'Ok') {
            onClose()
            resetValue()
            getIntervensiKeperawatan()
        }
    }

    const resetValue = () => {
        setIntervensiKeperawatan('')
    }

    const form_data = {
        data,
        intervensi_keperawatan, setIntervensiKeperawatan,
        loading,
        onSave
    }

    return (
        <IntervensiKeperawatan
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
