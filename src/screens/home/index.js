import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getAuthUser } from '../../utils/helpers';
import { useToast } from 'native-base';
import { apis } from '../../utils/apis';
import { updateApp } from '../../components/UpdateApp';
import Home from "./Home";
import { getTitleToast } from '../../utils/helpers';

const index = (props) => {
    const [loading, setLoading] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [id_perawat, setIdPerawat] = useState('')
    const toast = useToast()

    const validation = () => {
        let warning;
        !id_perawat ? warning = "Silahkan masukkan ID Perawat." : warning = false

        return warning;
    }

    useEffect(() => {
        getUser();
        updateApp()
    }, [])

    const getUser = () => {
        setLoading(true)
        getAuthUser().then(res => {
            props.SET_USER(res)
            if (res.id_mahasiswa)
                getPasien(res.id, "pasien-mahasiswa/");
            else
                getPasien(res.id, "pasien-perawat/");
        })
    }

    async function getPasien(id, uri) {
        const res = await apis.get(uri, id, false, setLoading)
        if (res.status == 'Ok') {
            props.SET_PASIENS(res.data);
        }
    }

    async function getEvaluasi() {
        setLoading(true)
        if (validation()) {
            return toast.show({
                title: getTitleToast.validation,
                description: validation(),
                status: "danger",
            })
        }

        const res = await apis.get('pasien-evaluasi/', id_perawat, toast, setLoading)
        if (res.status == 'Ok') {
            setOpen(false)
            props.navigation.navigate('PasienEvaluasi', {data: res.data})
        }
    }

    const form_data = {
        isOpen, setOpen,
        id_perawat, setIdPerawat,
        getEvaluasi,
        loading, setLoading,
        toast
    }

    return (
        <Home
            props={props}
            form_data={form_data}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        USER: state.userReducer.userState,
        PASIENS: state.pasienReducer.pasienState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_USER: (value) => dispatch({ type: 'SET_USER', value: value }),
        SET_PASIENS: (value) => dispatch({ type: 'SET_PASIENS', value: value }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)