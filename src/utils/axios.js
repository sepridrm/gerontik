import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
// import { Restart } from 'fiction-expo-restart'
import { Alert } from 'react-native'
import { getUrl, getKey } from './helpers'

let API

API = axios.create({
    baseURL: getUrl.baseURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        'apiKey': getKey.apiKey
    }
    // baseURL:process.env.REACT_APP_BASE_API
})

API.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

API.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        // console.log(error);
        // if (error.response.status === 401) {
        //     return Alert.alert(t('confirmation'), t('session'),
        //         [
        //             {
        //                 text: t('ok'), onPress: () => AsyncStorage.clear().then(() =>
        //                     // Restart()
        //                     null
        //                 )
        //             }
        //         ]);
        // }
        return Promise.reject(error);
    })

export default API