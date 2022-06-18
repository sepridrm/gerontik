import React from 'react'
import API from './axios'
import { getTitleToast } from './helpers'

export const apis = {
    post: function (url, data, toast, setLoading) {
        return new Promise((resolve, reject) => {
            API.post(url, data)
                .then(res => {
                    resolve(res.data);
                    setLoading(false);

                    toast ?
                        toast.show({
                            title: getTitleToast.succes,
                            description: res.data.message,
                            status: res.data.status == 'Ok' ? "success" : "warning"
                        })
                        : null
                }).catch(err => {
                    reject(err)
                    setLoading(false);

                    toast ?
                        toast.show({
                            title: getTitleToast.connection,
                            description: err.message,
                            status: "danger"
                        })
                        : null
                })
        })
    },
    get: function (url, id, toast, setLoading) {
        return new Promise((resolve, reject) => {
            let newUrl = url;
            if(id)
                newUrl = url+id

            API.get(newUrl)
                .then(res => {
                    resolve(res.data);
                    setLoading(false);

                    toast ?
                        res.data.status === 'Error' ?
                            toast.show({
                                title: getTitleToast.error,
                                description: res.data.message,
                                status: "danger"
                            })
                            :
                            toast.show({
                                title: getTitleToast.succes,
                                description: res.data.message,
                                status: "success"
                            })
                        : null
                }).catch(err => {
                    reject(err);
                    setLoading(false);

                    toast ?
                        toast.show({
                            title: getTitleToast.connection,
                            description: err.message,
                            status: "danger"
                        })
                        : null
                })
        })
    }
}