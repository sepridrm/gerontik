import { useToast } from 'native-base'
import React from 'react'
import { useState, useEffect } from 'react'
import { apis } from '../../utils/apis'
import { getTitleToast } from '../../utils/helpers'
import PrioritasMasalah from './PrioritasMasalah'

const index = ({ props }) => {
    const [prioritas_masalah, setPrioritasMasalah] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const toast = useToast()
    const pasien = props.route.params.pasien

    useEffect(() => {
        getAnalisisData();
    }, [])

    async function getAnalisisData() {
        setLoading(true)
        const res = await apis.get('prioritas-masalah/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setData(groupByDate(res.data));
        }
    }

    const validation = () => {
        let warning;
        (!prioritas_masalah) ? warning = "Silahkan lengkapi data." : warning = false

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
            prioritas_masalah: prioritas_masalah,
        }
        const res = await apis.post('prioritas-masalah', dataPost, toast, setLoading)
        if (res.status == 'Ok') {
            onClose()
            resetValue()
            getAnalisisData()
        }
    }

    const resetValue = () => {
        setPrioritasMasalah('')
    }

    const form_data = {
        data,
        prioritas_masalah, setPrioritasMasalah,
        loading,
        onSave
    }

    return (
        <PrioritasMasalah
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
