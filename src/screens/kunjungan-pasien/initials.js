import React, { useState } from 'react'

export const initials = () => {

    return [
        {
            type: 'select', label: "Kegiatan sehari hari", placeholder: 'Kegiatan sehari hari pasien', value: null, key: 0, item: [
                { value: "Ketergantungan (Kategori A), keadaan lansia sama sekali tidak mampu melakukan kegiatan sehari-hari secara fisik dan ekonomi", key: 0 },
                { value: "Sebagian dibantu (Kategori B), keadaan lansia dalam melakukan kegiatan sehari-hari sebagian membutuhkan bantuan orang lain baik fisik maupun ekonomi", key: 1 },
                { value: "Mandiri (Kategori C), keadaan lansia sanggup melakukan kegiatan sehari-hari secara mandiri tanpa bantuan orang lain baik fisik maupun ekonomi", key: 2 }]
        },
        {
            type: 'select', label: "Masalah emosional", placeholder: 'Masalah emosional pasien', value: null, key: 1, item: [
                { value: "Tidak Ada", key: 0 },
                { value: "Ada", key: 1 }]
        },
        {
            type: 'select', label: "Indeks masa tubuh", placeholder: 'Indeks masa tubuh pasien', value: null, key: 2, item: [
                { value: "Lebih", key: 0 },
                { value: "Normal", key: 1 },
                { value: "Kurang", key: 2 }]
        },
        { type: 'input', label: 'Berat badan', keyboard: 'numeric', placeholder: 'Berat badan pasien', value: '', key: 3 },
        { type: 'input', label: 'Tinggi badan (cm)', keyboard: 'numeric', placeholder: 'Tinggi badan pasien', value: '', key: 4 },
        {
            type: 'select', label: "Tekanan darah", placeholder: 'Tekanan darah pasien', value: null, key: 5, item: [
                { value: "Tinggi", key: 0 },
                { value: "Normal", key: 1 },
                { value: "Rendah", key: 2 },]
        },
        { type: 'input', label: 'Sistole', keyboard: 'numeric', placeholder: 'Sistole pasien', value: '', key: 6 },
        { type: 'input', label: 'Diastole', keyboard: 'numeric', placeholder: 'Diastole pasien', value: '', key: 7 },
        { type: 'input', label: 'Dengan obat', placeholder: 'Tekanan darah (dengan obat)', value: '', key: 8 },
        { type: 'input', label: 'Nadi', keyboard: 'numeric', placeholder: 'Nadi pasien', value: '', key: 9 },
        {
            type: 'select', label: "Haemoglobin", placeholder: 'Haemoglobin pasien', value: null, key: 10, item: [
                { value: "Kurang", key: 0 },
                { value: "Normal", key: 1 }]
        },
        { type: 'input', label: 'Haemoglobin g%', keyboard: 'numeric', placeholder: 'Haemoglobin g% pasien', value: '', key: 11 },
        {
            type: 'select', label: "Reduksi urine", placeholder: 'Reduksi urine pasien', value: null, key: 12, item: [
                { value: "Positif", key: 0 },
                { value: "Normal", key: 1 }]
        },
        { type: 'input', label: 'Jumlah tanda', keyboard: 'numeric', placeholder: 'Jumlah tanda reduksi urine', value: '', key: 13 },
        { type: 'input', label: 'Dengan obat', placeholder: 'Reduksi urine (dengan obat)', value: '', key: 14 },
        {
            type: 'select', label: "Protein urine", placeholder: 'Protein urine pasien', value: null, key: 15, item: [
                { value: "Positif", key: 0 },
                { value: "Normal", key: 1 }]
        },
        { type: 'input', label: 'Jumlah tanda', keyboard: 'numeric', placeholder: 'Jumlah tanda protein urine', value: '', key: 16 },
        { type: 'input', label: 'Dengan obat', placeholder: 'Protein urine (dengan obat)', value: '', key: 17 },
    ];

}