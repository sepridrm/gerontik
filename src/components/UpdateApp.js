import React from 'react'
import { Alert } from 'react-native'
import * as Updates from 'expo-updates';

export async function updateApp() {
    try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
            Alert.alert('Perbarui aplikasi', 'Memperbaharui versi terbaru pada aplikasi akan mendapatkan perbaikan pada bug, pembaruan keamanan dan peningkatan fitur', [
                { text: 'Download', onPress: () => downloadUpdate() }
            ],
                { cancelable: false })
        }
    } catch (e) {
        console.log(e);
    }
}

async function downloadUpdate() {
    const downloadUpdates = await Updates.fetchUpdateAsync();
    if (downloadUpdates.isNew) {
        Alert.alert('Perbarui aplikasi', 'Aplikasi telah diperbarui. Reload aplikasi sekarang', [
            { text: "OK", onPress: () => reloadApp() }
        ],
            { cancelable: false })
    }
}

async function reloadApp() {
    await Updates.reloadAsync()
}