import React, { useState } from 'react'

export const initials = (hidupsehat) => {
    const [data, setData] = useState(hidupsehat ? JSON.parse(hidupsehat.data) : [
        { title: null, key: 0, data: [{name: "Perkuat ketaqwaan pada Tuhan yang Maha Esa", value: false, key: 0}]},
        { title: null, key: 1, data: [{name: "Periksa kesehatan secara berkala", value: false, key: 0}]},
        { title: 'Makanan/Minuman', key: 2, data: [
            {name: "Kurangi gula", value: false, key: 0}, 
            {name: "Kurangi lemak", value: false, key: 1},
            {name: "Kurangi garam", value: false, key: 2},
            {name: "Perbanyak buah dan sayur", value: false, key: 3},
            {name: "Perbanyak susu tanpa lemak dan ikan", value: false, key: 4},
            {name: "Hindari alkohol", value: false, key: 5},
            {name: "Berhenti merokok", value: false, key: 6},
            {name: "Perbanyak minum air putih (6-8 gelas sehari)", value: false, key: 7},
        ]},
        { title: 'Kegiatan fisik dan psikologis', key: 3, data: [
            {name: "Pertahankan berat badan normal", value: false, key: 0}, 
            {name: "Lakukan kegiatan fisik sesuai kemampuan", value: false, key: 1},
            {name: "Lakukan latihan kesegaran jasmani sesuai kemampuan (jalan kaki, senam, berenang, bersepeda)", value: false, key: 2},
            {name: "Tingkatkan silaturahmi", value: false, key: 3},
            {name: "Sempatkan rekreasi", value: false, key: 4},
            {name: "Gunakan obat-obatan atas saran petugas kesehatan", value: false, key: 5},
            {name: "Pertahankan hubungan harmonis dalam keluarga", value: false, key: 6},
        ]},
        { title: 'Keadan umum pasien', key: 4, data: [
            {name: "Cepat lelah", value: false, key: 0}, 
            {name: "Nyeri dada", value: false, key: 1},
            {name: "Sesak nafas", value: false, key: 2},
            {name: "Berdebar-debar", value: false, key: 3},
            {name: "Sulit tidur", value: false, key: 4},
            {name: "Batuk", value: false, key: 5},
            {name: "Gangguan penglihatan", value: false, key: 6},
            {name: "Gangguan pendengaran", value: false, key: 7},
            {name: "Gangguan mulut", value: false, key: 8},
            {name: "Nafsau makan meningkat/menurun", value: false, key: 9},
            {name: "Nyeri pinggang", value: false, key: 10},
            {name: "Nyeri sendi", value: false, key: 11},
            {name: "Gangguan gerak", value: false, key: 12},
            {name: "Kaki bengkak", value: false, key: 13},
            {name: "Kesemutan", value: false, key: 14},
            {name: "Sering haus", value: false, key: 15},
            {name: "Gangguan buang air besar", value: false, key: 16},
            {name: "Benjolan tidak normal", value: false, key: 17},
        ]},
    ])

    return {data, setData};

}