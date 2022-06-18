import React, { useState } from 'react'

export const initials = (psm) => {
    const [data, setData] = useState(psm ? JSON.parse(psm.data) : [
        { title: '1. Orientasi-Sekarang', key: 0, data: [
            {name: "Tahun berapa?", value: 0, maxValue: 1, key: 0}, 
            {name: "Musim apa?", value: 0, maxValue: 1, key: 1},
            {name: "Hari apa?", value: 0, maxValue: 1, key: 2},
        ]},
        { title: '2. Orientasi-Saat ini', key: 1, data: [
            {name: "Kita di negara mana?", value: 0, maxValue: 1, key: 0},
            {name: "Provinsi mana?", value: 0, maxValue: 1, key: 1},
            {name: "Kota mana", value: 0, maxValue: 1, key: 2},
            {name: "Rumah sakit mana?", value: 0, maxValue: 1, key: 3},
        ]},
        { title: '3. Registrasi', key: 2, data: [
            {name: "Sebut nama 3 benda, dengan selang waktu masing-masing 1 (satu) detik, kemudian klien diminta menyebut ketiga nama benda tadi. Tiap jawaban yang benar diberi nilai 1", value: 0, maxValue: 3, key: 0},
        ]},
        { title: '4. Perhatian dan Berhitung', key: 3, data: [
            {name: "Kelipatan tujuh, beri satu nilai untuk jawaban yang benar. Hentikan setelah lima jawaban", value: 0, maxValue: 5, key: 0},
            {name: "Menyebut kembali (recall). Penderita diminta menyebut nama tiga benda pada pertanyaan nomor 3 (tiga)", value: 0, maxValue: 3, key: 1},
        ]},
        { title: '5. Bahasa', key: 4, data: [
            {name: "Tunjukkan sebuah pensil dan arloji. Penderita diminta menyebut nama kedua benda tadi", value: 0, maxValue: 1, key: 0},
            {name: "Penderita diminta mengulang kata “anu”, “tetapi”", value: 0, maxValue: 1, key: 1},
            {name: "Penderita diminta untuk mengikuti perintah tiga langkah kaki, letakkan kertas itu ditangan kananmu, lipat kertas itu ditangan kananmu, lipat kertas tadi menjadi setengahnya, kemudian letakkan dilantai", value: 0, maxValue: 3, key: 2},
            {name: "Penderita diminta membaca tulisan berikut dan kemudian mematuhinya: “Tutuplah Mata Anda”", value: 0, maxValue: 1, key: 3},
            {name: "Penderita diminta menulis kalimat yang dipilihnya sendiri. Kalimat harus berisi subjek dan objek agar mempunyai arti. Abaikan bila ada kesalahan", value: 0, maxValue: 1, key: 4},
            {name: "Penderita diminta menggambar kembali dari segilima berikut. Apabila semua sisi dan sudut sisi segi lima tergambar, beri nilai 1", value: 0, maxValue: 1, key: 5},
        ]},
    ])

    return {data, setData};

}