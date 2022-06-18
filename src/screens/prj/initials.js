import React, { useState } from 'react'

export const initials = (psm) => {
    const [data, setData] = useState(psm ? JSON.parse(psm.data) : [
        { title: '1. Riwayat jatuh (jatuh akibat penyakit akut atau dalam 3 bulan terakhir', key: 0, data: [
            {name: "Tidak", value: 0, selected: false, key: 0}, 
            {name: "Iya", value: 25, selected: false, key: 1},
        ]},
        { title: '2. Diagnosis Sekunder (lebih dari satu diagnosa)', key: 1, data: [
            {name: "Tidak", value: 0, selected: false, key: 0}, 
            {name: "Iya", value: 15, selected: false, key: 1},
        ]},
        { title: '3. Alat bantu jalan', key: 2, data: [
            {name: "Tidak menggunakan", value: 0, selected: false, key: 0}, 
            {name: "Bedrest / kruk / tongkat / walker / Selalu dibantu perawat", value: 15, selected: false, key: 1},
            {name: "Furniture (berpegangan pada kursi, meja, tempat tidur)", value: 30, selected: false, key: 2},
        ]},
        { title: '4. Pemakaian IV Catheter', key: 3, data: [
            {name: "Tidak", value: 0, selected: false, key: 0}, 
            {name: "Iya", value: 20, selected: false, key: 1},
        ]},
        { title: '5. Kemampuan berjalan', key: 4, data: [
            {name: "Normal / bedrest / kursi roda Terganggu", value: 0, selected: false, key: 0}, 
            {name: "Lemah (menggunakan pegangan untuk keseimbangan)", value: 10, selected: false, key: 1},
            {name: "Terganggu", value: 20, selected: false, key: 2},
        ]},
        { title: '6. Status mental', key: 5, data: [
            {name: "Sadar akan kemampuannya", value: 0, selected: false, key: 0}, 
            {name: "Tidak sadar akan kemampuannya", value: 15, selected: false, key: 1},
        ]},
    ])

    return {data, setData};

}