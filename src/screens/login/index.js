import React, { useState } from 'react'
import Login from './Login'
import { useToast } from 'native-base';
import { setAuthUser, getTitleToast } from '../../utils/helpers';
import { apis } from '../../utils/apis';

const index = (props) => {
    const [id, setId] = useState('')
    //1 = perawat, 2 = mahasiswa
    const [whoAmI, setWhoAmI] = useState(1)
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const validation = () => {
        let warning;
        (!id || !password) ? warning = "Silahkan lengkapi data." : warning = false

        return warning;
    }

    async function onLogin() {
        if (validation()) {
            return toast.show({
                title: getTitleToast.validation,
                description: validation(),
                status: "danger",
            })
        }

        setLoading(true)
        const data = {
            id, whoAmI, password
        }

        const res = await apis.post('login', data, toast, setLoading)
        if (res.status == 'Ok') {
            setAuthUser(res.data);
            props.navigation.replace('Home');
        }
    }

    const form_data = {
        id, setId,
        whoAmI, setWhoAmI,
        password, setPassword,
        loading, setLoading,
        onLogin
    }

    return (
        <Login
            props={props}
            form_data={form_data}
        />
    )
}

export default index
