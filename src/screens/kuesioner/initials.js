import React, { useState } from 'react'
import Moment from 'moment'

export const initials = (kuesioner) => {
    const [apgar_keluarga, setApgarKeluarga] = useState( kuesioner && kuesioner.apgar_keluarga ? JSON.parse(kuesioner.apgar_keluarga) : [
        { title: '1. A : Adaptasi\nSaya puas bahwa saya dapat kembali pada keluarga (teman-teman) saya untuk membantu pada waktu sesuatu menyusahkan saya', key: 0, data: [
            {name: "Selalu", value: 2, selected: false, key: 0}, 
            {name: "Kadang-kadang", value: 1, selected: false, key: 1},
            {name: "Tidak pernah", value: 0, selected: false, key: 2},
        ]},
        { title: '2. P : Partnership\nSaya puas dengan cara keluarga (teman-teman) saya membicarakan sesuatu dengan saya dan mengungkapkan masalah saya.', key: 1, data: [
            {name: "Selalu", value: 2, selected: false, key: 0}, 
            {name: "Kadang-kadang", value: 1, selected: false, key: 1},
            {name: "Tidak pernah", value: 0, selected: false, key: 2},
        ]},
        { title: '3. G : Growth\nSaya puas bahwa keluarga (teman-teman) saya menerima & mendukung keinginan saya untuk melakukan aktivitas atau arah baru', key: 2, data: [
            {name: "Selalu", value: 2, selected: false, key: 0}, 
            {name: "Kadang-kadang", value: 1, selected: false, key: 1},
            {name: "Tidak pernah", value: 0, selected: false, key: 2},
        ]},
        { title: '4. A:Afek\nSaya puas dengan cara keluarga (teman-teman) saya mengekspresikan afek dan berespon terhadap emosi-emosi saya seperti marah, sesih atau meronta', key: 3, data: [
            {name: "Selalu", value: 2, selected: false, key: 0}, 
            {name: "Kadang-kadang", value: 1, selected: false, key: 1},
            {name: "Tidak pernah", value: 0, selected: false, key: 2},
        ]},
        { title: '5. R : Resolve\nSaya puas dengan cara teman-teman saya dan saya menyediakan waktu bersama-sama mengekspresikan afek dan berespon', key: 4, data: [
            {name: "Selalu", value: 2, selected: false, key: 0}, 
            {name: "Kadang-kadang", value: 1, selected: false, key: 1},
            {name: "Tidak pernah", value: 0, selected: false, key: 2},
        ]},
    ])
    const [fungsi_kognitif, setFungsiKognitif] = useState(kuesioner && kuesioner.fungsi_kognitif ? JSON.parse(kuesioner.fungsi_kognitif) : [
        { title: '1. Jam berapa sekarang ?', key: 0, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '2. Tahun berapa sekarang ?', key: 1, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '3. Kapan Bapak/Ibu lahir ?', key: 2, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '4. Berapa umur Bapak/Ibu sekarang ?', key: 3, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '5. Dimana alamat Bapak/Ibu sekarang ?', key: 4, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '6. Berapa jumlah anggota keluarga yang tinggal', key: 5, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '7. Siapa nama anggota keluarga yang tinggal bersama Bapak/Ibu ?', key: 6, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '8. Tahun berapa hari Kemerdekaan Indonesia ?', key: 7, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '9. Siapa nama Presiden RI sekarang :', key: 8, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
        { title: '10. Coba hitung terbalik dari angka 20 ke 1 ?', key: 9, data: [
            {name: "Jawaban benar", value: 0, selected: false, key: 0}, 
            {name: "Jawaban salah", value: 1, selected: false, key: 1},
        ]},
    ])
    const [status_fungsional, setStatusFungsional] = useState(kuesioner && kuesioner.status_fungsional ? JSON.parse(kuesioner.status_fungsional) : [
        { title: '1. Mandi\nMandiri:\nBantuan hanya pada satu bagian mandi (seperti punggung atau ekstremitas yang tidak mampu) atau mandi sendiri sepenuhnya.\nTergantung:\nBantuan mandiri lebih dari satu bagian tubuh, bantuan masuk dan keluar dari bak mandi, serta tidak mandiri sendiri', key: 0, data: [
            {name: "Mandiri", value: 0, selected: false, key: 0}, 
            {name: "Tergantung", value: 1, selected: false, key: 1},
        ]},
        { title: '2. Berpakaian\nMandiri:\nMengambil baju dari lemari, memakai pakaian, melepaskan pakaian, mengancing/mengikat pakaian.\nTergantung:\nTidak dapat memakai baju sendiri atau hanya sebagian', key: 1, data: [
            {name: "Mandiri", value: 0, selected: false, key: 0}, 
            {name: "Tergantung", value: 1, selected: false, key: 1},
        ]},
        { title: '3. Ke kamar kecil\nMandiri:\nMasuk dan keluar dari kamar kecil kemudian membersihkan genetalia sendiri.\nTergantung:\nMenerima bantuan untuk masuk ke kamar kecil dan menggunakan pispot', key: 2, data: [
            {name: "Mandiri", value: 0, selected: false, key: 0}, 
            {name: "Tergantung", value: 1, selected: false, key: 1},
        ]},
        { title: '4. Berpindah\nMandiri:\nBerpindah ked an dari tempat tidur untuk duduk, bangkit dari kursi sendiri.\nTergantung:\nBantuan dalam naik atau turun dari tempat tidur atau kursi, tidak melakukan satu atau lebih perpindahan', key: 3, data: [
            {name: "Mandiri", value: 0, selected: false, key: 0}, 
            {name: "Tergantung", value: 1, selected: false, key: 1},
        ]},
        { title: '5. Kontinen\nMandiri:\nBAB dan BAK seluruhnya dikontrol sendiri\nTergantung:\nInkontinensia parsial atau total, penggunaan kateter, pispot, enema dan pembalut', key: 4, data: [
            {name: "Mandiri", value: 0, selected: false, key: 0}, 
            {name: "Tergantung", value: 1, selected: false, key: 1},
        ]},
        { title: '6. Makan\nMandiri:\nMengambil makanan dari piring dan menyuapinya sendiri\nTergantung:\nBantuan dalam hal mengambil makanan dari piring dan menyuapinya, tidak makan sama sekali dan makan parenteral', key: 5, data: [
            {name: "Mandiri", value: 0, selected: false, key: 0}, 
            {name: "Tergantung", value: 1, selected: false, key: 1},
        ]},
    ])
    const [skala_depresi, setSkalaDepresi] = useState(kuesioner && kuesioner.skala_depresi ? JSON.parse(kuesioner.skala_depresi) : [
        { title: '1. Apakah anda sebenarnya puas dengan kehidupan anda ?', key: 0, data: [
            {name: "Ya", value: 0, selected: false, key: 0}, 
            {name: "Tidak", value: 1, selected: false, key: 1},
        ]},
        { title: '2. Apakah anda telah meningggalkan banyak kegiatan dan minat/ kesenangan anda', key: 1, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '3. Apakah anda merasa kehidupan anda kosong ?', key: 2, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '4. Apakah anda sering merasa bosen ?', key: 3, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '5. Apakah anda mempunyai semangat yang baik setiap saat ?', key: 4, data: [
            {name: "Ya", value: 0, selected: false, key: 0}, 
            {name: "Tidak", value: 1, selected: false, key: 1},
        ]},
        { title: '6. Apakah anda merasa takut sesuatu yang buruk akan terjadi pada anda ?', key: 5, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '7. Apakah anda merasa bahagia untuk sebagian besar hidup anda ?', key: 6, data: [
            {name: "Ya", value: 0, selected: false, key: 0}, 
            {name: "Tidak", value: 1, selected: false, key: 1},
        ]},
        { title: '8. Apakah anda merasa sering tidak berdaya ?', key: 7, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '9. Apakah anda lebih sering di rumah daripada pergi ke luar dan mengerjakan sesuatu hal yang baru ?', key: 8, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '10. Apakah anda merasa mempunyai banyak masalah dengan daya ingat anda dibandingkan kebanyakan orang ?', key: 9, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '11. Apakah anda pikir bahwa kehidupan anda sekarang menyenangkan ?', key: 10, data: [
            {name: "Ya", value: 0, selected: false, key: 0}, 
            {name: "Tidak", value: 1, selected: false, key: 1},
        ]},
        { title: '12. Apakah anda merasa tidak berharga seperti perasaan anda saat ini ?', key: 11, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '13. Apakah anda merasa tidak berharga seperti perasaan anda saat ini ?', key: 12, data: [
            {name: "Ya", value: 0, selected: false, key: 0}, 
            {name: "Tidak", value: 1, selected: false, key: 1},
        ]},
        { title: '14. Apakah anda merasa bahwa keadaan anda tidak ada harapan ?', key: 13, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
        { title: '15. Apakah anda pikir bahwa orang lain, lebih baik keadaannya daripada anda ?', key: 14, data: [
            {name: "Ya", value: 1, selected: false, key: 0}, 
            {name: "Tidak", value: 0, selected: false, key: 1},
        ]},
    ])

    return [
        ['APGAR KELUARGA', apgar_keluarga, setApgarKeluarga, 'apgar_keluarga'],
        ['PENGKAJIAN FUNGSI KOGNITIF (SPMSQ)', fungsi_kognitif, setFungsiKognitif, 'fungsi_kognitif'],
        ['PENGKAJIAN STATUS FUNGSIONAL', status_fungsional, setStatusFungsional, 'status_fungsional'],
        ['GERIATRIC DEPRESSION SCALE', skala_depresi, setSkalaDepresi,'skala_depresi'],
    ]
}