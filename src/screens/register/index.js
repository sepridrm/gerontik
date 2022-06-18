import React, { useState } from 'react'
import Register from './Register';
import { useToast } from 'native-base';
import { validateEmail, getTitleToast } from '../../utils/helpers';
import { apis } from '../../utils/apis';

const index = (props) => {
    const [id, setId] = useState('')
    //1 = perawat, 2 = mahasiswa
    const [whoAmI, setWhoAmI] = useState(1)
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const validation = () => {
        let warning;
        (!id || !nama || !email || !password) ? warning = "Silahkan lengkapi data." :
            !validateEmail(email) ? warning = "Alamat email tidak valid." : warning = false

        return warning;
    }

    async function onRegister(){
        if (validation()) {
            return toast.show({
                title: getTitleToast.validation,
                description: validation(),
                status: "danger",
            })
        }

        setLoading(true)
        const data = {
            id, whoAmI, nama, email, password
        }

        const res = await apis.post('register', data, toast, setLoading)
        if (res.status == 'Ok') {
            props.navigation.goBack();
        }
    }

    const form_data = {
        id, setId,
        whoAmI, setWhoAmI,
        nama, setNama,
        email, setEmail,
        password, setPassword,
        loading, setLoading,
        onRegister
    }

    return (
        <Register
            props={props}
            form_data={form_data}
        />
    )
}

export default index