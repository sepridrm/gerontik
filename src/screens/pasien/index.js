import React, { useState } from 'react'
import Pasien from './Pasien'
import { useToast } from 'native-base';
import { connect } from "react-redux";
import { getTitleToast, imageManipulator } from '../../utils/helpers';
import Moment from 'moment'
import { apis } from '../../utils/apis';

Moment.updateLocale('id', require('moment/locale/id'));

const index = (props) => {
    const [nama, setNama] = useState('')
    const [tanggal_lahir, setTanggalLahir] = useState(Moment().subtract(80, 'years').format('LL'))
    const [tempat_lahir, setTempatLahir] = useState('')
    const [jenis_kelamin, setJenisKelamin] = useState('')
    const [agama, setAgama] = useState('')
    const [alamat, setAlamat] = useState('')
    const [pendidikan, setPendidikan] = useState('')
    const [pekerjaan, setPekerjaan] = useState('')
    const [status, setStatus] = useState('')
    const [path_foto, setPathFoto] = useState(null)
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const validation = () => {
        let warning;
        const minDate = Moment().subtract(80, 'years').format('LL');
        (!nama || !tempat_lahir || !jenis_kelamin || !agama || !alamat || !pendidikan || !pekerjaan || !status) ? warning = "Silahkan lengkapi data." :
            tanggal_lahir == minDate ? warning = "Silahkan pilih tanggal lahir." : warning = false

        return warning;
    }

    async function setFoto(foto){
        const newFoto = await imageManipulator(foto)
        setPathFoto(newFoto)
    }

    async function onSave() {
        if (validation()) {
            return toast.show({
                title: getTitleToast.validation,
                description: validation(),
                status: "danger",
            })
        }

        setLoading(true)
        let formData = new FormData();
        props.USER.id_mahasiswa ? formData.append('id_mahasiswa', props.USER.id) : formData.append('id_perawat', props.USER.id)
        formData.append('nama', nama);
        formData.append('tanggal_lahir', Moment(tanggal_lahir, 'LL').format('YYYY-MM-DD'));
        formData.append('tempat_lahir', tempat_lahir);
        formData.append('jenis_kelamin', jenis_kelamin);
        formData.append('agama', agama);
        formData.append('pendidikan', pendidikan);
        formData.append('pekerjaan', pekerjaan);
        formData.append('alamat', alamat);
        formData.append('status', status);
        formData.append('path_foto', path_foto);
        props.USER.id_mahasiswa ? formData.append('role', 'mahasiswa') : formData.append('role', 'perawat')

        const res = await apis.post('pasien', formData, toast, setLoading)
        if (res.status == 'Ok') {
            resetValue();
            let res;
            props.USER.id_mahasiswa ? res = await apis.get('pasien-mahasiswa/', props.USER.id, false, setLoading) : res = await apis.get('pasien-perawat/', props.USER.id, false, setLoading);
            if (res.status == 'Ok') {
                props.SET_PASIENS(res.data)
            }
        }
    }

    const resetValue = () => {
        setNama('');
        setTempatLahir('');
        setTanggalLahir(Moment().subtract(80, 'years').format('LL'));
        setAlamat('');
        setJenisKelamin('');
        setAgama('');
        setPendidikan('');
        setPekerjaan('');
        setStatus('');
        setPathFoto(null);
    }

    const form_data = {
        nama, setNama,
        tanggal_lahir, setTanggalLahir,
        tempat_lahir, setTempatLahir,
        jenis_kelamin, setJenisKelamin,
        agama, setAgama,
        alamat, setAlamat,
        pendidikan, setPendidikan,
        pekerjaan, setPekerjaan,
        status, setStatus,
        path_foto, setPathFoto,
        setFoto,
        loading, setLoading,
        onSave
    }

    return (
        <Pasien
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
