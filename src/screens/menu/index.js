import React, { useState, useEffect } from 'react'
import Menu from './Menu';
import { connect } from 'react-redux';
import { getUrl } from '../../utils/helpers';
import { apis } from '../../utils/apis';
import { useToast } from 'native-base';
import { Linking, View } from 'react-native';
import { styles } from '../../utils/helpers';

const index = (props) => {
    const pasien = props.route.params.pasien
    const [menu, setMenu] = useState([
        { icon: '', title: 'Buku Kehidupan', code: 'BK', nav: 'BukuKehidupan' },
        { icon: '', title: 'Kartu Menuju Sehat', code: 'KMS', nav: 'KMS' },
        { icon: '', title: 'Living Care', code: 'LC', nav: 'LivingCare' },
        { icon: '', title: 'Pengkajian Status Mental', code: 'PSM', nav: 'PSM' },
        { icon: '', title: 'Pengkajian Resiko Jatuh', code: 'PRJ', nav: 'PRJ' },
        { icon: '', title: 'Pengkajian AsKep', code: 'PA', nav: 'Pengkajian' },
        { icon: '', title: 'Evaluasi', code: 'E', nav: 'Evaluasi' },
        { icon: '', title: 'Kuesioner', code: 'K', nav: 'Kuesioner' },
        { icon: '', title: 'Laporan Pasien', code: 'LP', nav: getUrl.baseURL + 'report/' + pasien.id }
    ])
    const [loading, setLoading] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [skrining, setSkrining] = useState({})
    const toast = useToast()

    async function cekReport(url) {
        setLoading(true)
        const res = await apis.get('report-cek/', pasien.id, toast, setLoading)
        if (res.status == 'Ok')
            Linking.openURL(url)
    }

    async function getSkrining() {
        setLoading(true)
        const res = await apis.get('skrining/', pasien.id, false, setLoading)
        if (res.status == 'Ok') {
            setSkrining(res.data)
            setOpen(true)
        }
    }

    const form_data = {
        getSkrining,
        skrining,
        isOpen, setOpen,
        menu,
        pasien,
        cekReport,
        loading, setLoading
    }

    return (
        <Menu
            props={props}
            form_data={form_data}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        USER: state.userReducer.userState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_USER: (value) => dispatch({ type: 'SET_USER', value: value }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
