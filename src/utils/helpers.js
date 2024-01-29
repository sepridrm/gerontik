import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator'

// const baseURL = 'http://192.168.136.215:8000/'
// const baseURL = 'http://192.168.100.72:8000/'
const baseURL = 'https://gerontik.stikesmitraadiguna.ac.id/'

export const getUrl = {
    baseURL: baseURL + 'api/',
    baseURLImage: baseURL,
}

export const getKey = {
    apiKey: 'lkjnsfaJHoahslkf889w4najnKLNLKGjnaljnsdio8'
}

export const getRandomChar = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 20; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const getAuthUser = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('user')
        return jsonValue != null ? JSON.parse(jsonValue) : { isLogin: false, language: 'id' }
    } catch (e) {
        return { isLogin: false, language: 'id' }
    }
}

export const setAuthUser = async (data) => {
    data = {
        ...data,
        isLogin: true,
    }
    await AsyncStorage.setItem('user', JSON.stringify(data));
    return true
}

export const getColor = {
    backgroundRecruiter: '#2B9FDC',
    backgroundJobSeeker: '#E50033',
    backgroundDark: '#168978',
    devider: '#F5F5F5',
    backgroundSearch: '#F0EFF4'
}

export const getSize = {
    widthScreen: Dimensions.get('window').width,
    heightScreen: Dimensions.get('window').height,
    paddingHorizontal: 20,
}

export const getTitleToast = {
    succes: 'Success',
    error: 'Something went wrong',
    validation: 'Validation needed',
    connection: 'No internet connection'
}

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const styles = StyleSheet.create({
    publicContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 25,
    }
})

function resizeImage(width, height) {
    if (height <= 720 && width <= 720)
        return [width, height]

    let newWidth = width / 1000
    let newHeight = height / 1000

    let devider = 0.5
    if (newWidth > newHeight) {
        devider = devider + newWidth
    } else {
        devider = devider + newHeight
    }

    newWidth < 1 ? newWidth = Math.ceil(width - 280) : newWidth = Math.ceil(width / devider)
    newHeight < 1 ? newHeight = Math.ceil(height - 280) : newHeight = Math.ceil(height / devider)

    return [newWidth, newHeight]
}

export async function imageManipulator(image) {
    const newSize = resizeImage(image.width, image.height)

    const newImage = await ImageManipulator.manipulateAsync(
        image.uri,
        [{ resize: { width: newSize[0], height: newSize[1] } }],
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
    );

    const data = {
        uri: newImage.uri,
        type: 'image/jpg',
        name: 'image.jpg',
    }

    return data
}

export const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}