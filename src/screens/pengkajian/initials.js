import React, { useState } from 'react'
import Moment from 'moment'

export const initials = (pengkajian, pasien) => {
    const [identitas, setIdentitas] = useState( pengkajian && pengkajian.identitas ? JSON.parse(pengkajian.identitas) : [
        { label: 'Nama', placeholder: 'Nama pasien', value: pasien.nama, key: 0, editable: false },
        { label: 'Tempat/Tanggal lahir', placeholder: 'Tempat dan tanggal lahir pasien', value: pasien.tempat_lahir+"/"+Moment(pasien.tanggal_lahir).format('LL'), key: 1, editable: false },
        { label: 'Jenis kelamin', placeholder: 'Jenis kelamin pasien', value: pasien.jenis_kelamin, key: 2, editable: false },
        { label: 'Status perkawinan', placeholder: 'Status perkawinan pasien', value: pasien.status, key: 3, editable: false },
        { label: 'Agama', placeholder: 'Agama pasien', value: pasien.agama, key: 4, editable: false },
        { label: 'Suku', placeholder: 'Suku pasien', value: '', key: 5 },
    ])
    const [riwayat_pekerjaan, setRiwayatPekerjaan] = useState(pengkajian && pengkajian.riwayat_pekerjaan ? JSON.parse(pengkajian.riwayat_pekerjaan) : [
        { label: 'Pekerjaan saat ini', placeholder: 'Pekerjaan pasien saat ini', value: pasien.pekerjaan, key: 0, editable: false },
        { label: 'Pekerjaan sebelumnya', placeholder: 'Pekerjaan pasien sebelumnya', value: '', key: 1 },
        { label: 'Sumber pendapatan', placeholder: 'Sumber pendapatan pasien', value: '', key: 2 },
        { label: 'Kecukupan pendapatan', placeholder: 'Kecukupan pendapatan pasien', value: '', key: 3 },
    ])
    const [lingkungan, setLingkungan] = useState(pengkajian && pengkajian.lingkungan ? JSON.parse(pengkajian.lingkungan) : [
        { label: 'Kebersihan dan kerapihan ruangan ?', placeholder: 'Kebersihan dan kerapihan ruangan', value: '', key: 0 },
        { label: 'Penerangan ?', placeholder: 'Penerangan', value: '', key: 1 },
        { label: 'Sirkulasi udara ?', placeholder: 'Sirkulasi udara', value: '', key: 2 },
        { label: 'Keadaan kamar mandi dan WC ?', placeholder: 'Keadaan kamar mandi dan WC', value: '', key: 3 },
        { label: 'Pembuangan air kotor ?', placeholder: 'Pembuangan air kotor', value: '', key: 4 },
        { label: 'Sumber air minum ?', placeholder: 'Sumber air minum', value: '', key: 5 },
        { label: 'Pembuangan sampah ?', placeholder: 'Pembuangan sampah', value: '', key: 6 },
        { label: 'Sumber pencemaran ?', placeholder: 'Sumber pencemaran', value: '', key: 7 },
        { label: 'Privasi ?', placeholder: 'Privasi', value: '', key: 8 },
        { label: 'Resiko injuri ?', placeholder: 'Resiko injuri', value: '', key: 9 },
    ])
    const [kesehatan_saatini, setKesehatanSaatini] = useState(pengkajian && pengkajian.kesehatan_saatini ? JSON.parse(pengkajian.kesehatan_saatini) : [
        { label: 'Keluhan utama dalam 1 tahun terakhir', placeholder: 'Keluhan utama dalam 1 tahun terakhir', value: '', key: 0 },
        { label: 'Gejala yang dirasakan', placeholder: 'Gejala yang dirasakan', value: '', key: 1 },
        { label: 'Faktor pencetus', placeholder: 'Faktor pencetus', value: '', key: 2 },
        { label: 'Timbulnya keluhan', placeholder: 'Timbulnya keluhan', value: '', key: 3 },
        { label: 'Upaya mengatasinya', placeholder: 'Upaya mengatasinya', value: '', key: 4 },
        { label: 'Pergi ke RS/klinik pengobatan/dokter praktek/bidan/perawat ?', placeholder: 'Pergi ke RS/klinik pengobatan/dokter praktek/bidan/perawat', value: '', key: 5 },
        { label: 'Mengkonsumsi obat-obatan sendiri ? Obat tradisional ?', placeholder: 'Mengkonsumsi obat-obatan sendiri/Obat tradisional', value: '', key: 6 },
        { label: 'Lain-lain', placeholder: 'Lain-lain...', value: '', key: 7 },
    ])
    const [kesehatan_masalalu, setKesehatanMasalalu] = useState(pengkajian && pengkajian.kesehatan_masalalu ? JSON.parse(pengkajian.kesehatan_masalalu) : [
        { label: 'Penyakit yang pernah diderita', placeholder: 'Penyakit yang pernah diderita', value: '', key: 0 },
        { label: 'Riwayat alergi (obat, makanan, binatang, debu dll)', placeholder: 'Riwayat alergi (obat, makanan, binatang, debu dll)', value: '', key: 1 },
        { label: 'Riwayat kecelakaan', placeholder: 'Riwayat kecelakaan', value: '', key: 2 },
        { label: 'Riwayat pernah dirawat di RS', placeholder: 'Riwayat pernah dirawat di RS', value: '', key: 3 },
        { label: 'Riwayat pemakaian obat', placeholder: 'Riwayat pemakaian obat', value: '', key: 4 },
    ])
    const [pola_fungsional, setPolaFungsional] = useState(pengkajian && pengkajian.pola_fungsional ? JSON.parse(pengkajian.pola_fungsional) : [
        { label: 'Persepsi Kesehatan Dan Pola Manajemen Kesehatan', placeholder: 'Kebiasaan yang mempengaruhi kesehatan misal merokok, minuman keras, ketergantungan terhadap obat (jenis/frekuensi/jumlah/lama pakai)', value: '', key: 0 },
        { label: 'Nutrisi Metabolik', placeholder: 'Frekuensi makan, nafsu makan , jenis makanan, makanan yang tidak disukai, alergi terhadap makanan, pantangan makanan, keluhan yang berhubungan dengan makan.', value: '', key: 1 },
        { label: 'Eliminasi', placeholder: 'BAK: Frekuensi dan waktu,kebiasaan BAK pada malam hari, keluhan yang berhubungan dengan BAK. BAB: Frekuensi dan waktu, konsistensi, keluhan yang berhubungan dengan BAB, pengalaman memakai pencahar.', value: '', key: 2 },
        { label: 'Aktivitas Pola Latihan', placeholder: 'Rutinitas mandi, kebersihan sehari-hari, aktifitas sehari-hari, apakah ada masalah dengan aktifitas, kemampuan mandiri.', value: '', key: 3 },
        { label: 'Pola Istirahat Tidur', placeholder: 'Lama tidur malam, tidur siang, keluhan yang berhubungan dengan tidur.', value: '', key: 4 },
        { label: 'Pola Kognitif Persepsi', placeholder: 'Masalah dengan penglihatan (normal, terganggu (ka/ki), kabur, pakai kacamata, masalah pendengaran/normal, terganggu (ka/ki), memakai alat bantu dengar, tuli (ka/ki) dll.', value: '', key: 5 },
        { label: 'Persepsi Diri-Pola Konsep Diri', placeholder: 'Bagaimana klien memandang dirinya (persepsi diri sebagai lansia), bagaimana persepsi klien tentang orang lain mengenai dirinya ?', value: '', key: 6 },
        { label: 'Pola Peran-Hubungan', placeholder: 'Peran ikatan ? kepuasan ? pekerjaan/sosial/hubungan perkawinan ?', value: '', key: 7 },
        { label: 'Seksualitas', placeholder: 'Riwayat reproduksi, kepuasan seksual, masalah ?', value: '', key: 8 },
        { label: 'Koping-Pola Toleransi Stress', placeholder: 'Apa yang menyebabkan stress pada lansia, bagaaimana penanganan terhadap masalah ?', value: '', key: 9 },
        { label: 'Nilai-Pola Keyakinan', placeholder: 'Sesuatu yang bernilai dalam hidupnya (spirituality: menganut suatu agama, bagaimana manusia dengan penciptanya), keyakinan akan kesehatan, keyakinan agama.', value: '', key: 10 },
    ])
    const [pemeriksaan_fisik, setPemeriksaanFisik] = useState(pengkajian && pengkajian.pemeriksaan_fisik ? JSON.parse(pengkajian.pemeriksaan_fisik) : [
        { label: 'Keadaan Umum', placeholder: 'Keadaan Umum', value: '', key: 0 },
        { label: 'TTV', placeholder: 'TTV', value: '', key: 1 },
        { label: 'BB/TB', placeholder: 'BB/TB', value: '', key: 2 },
        { label: 'Rambut', placeholder: 'Rambut', value: '', key: 3 },
        { label: 'Mata', placeholder: 'Mata', value: '', key: 4 },
        { label: 'Telinga', placeholder: 'Telinga', value: '', key: 5 },
        { label: 'Mulut, gigi dan bibir', placeholder: 'Mulut, gigi dan bibir', value: '', key: 6 },
        { label: 'Dada', placeholder: 'Dada', value: '', key: 7 },
        { label: 'Abdomen', placeholder: 'Abdomen', value: '', key: 8 },
        { label: 'Kulit', placeholder: 'Kulit', value: '', key: 9 },
        { label: 'Ekstremitas atas', placeholder: 'Ekstremitas atas', value: '', key: 10 },
        { label: 'Ekstremitas bawah', placeholder: 'Ekstremitas bawah', value: '', key: 11 },
    ])
    const [pengkajian_khusus, setPengkajianKhusus] = useState(pengkajian && pengkajian.pengkajian_khusus ? JSON.parse(pengkajian.pengkajian_khusus) : [
        { label: 'Fungsi Kognitif SPMSQ', placeholder: 'Fungsi Kognitif SPMSQ', value: '', key: 0 },
        { label: 'Status fungsional (Katz Indeks)', placeholder: 'Status fungsional (Katz Indeks)', value: '', key: 1 },
        { label: 'MMSE', placeholder: 'MMSE', value: '', key: 2 },
        { label: 'APGAR keluarga', placeholder: 'APGAR keluarga', value: '', key: 3 },
        { label: 'Skala depresi', placeholder: 'Skala depresi', value: '', key: 4 },
        { label: 'Screening Fall', placeholder: 'Screening Fall', value: '', key: 5 },
        { label: 'Skala Norton', placeholder: 'Skala Norton', value: '', key: 6 },
    ])

    return [
        ['Identitas', identitas, setIdentitas, 'identitas'],
        ['Riwayat Pekerjaan dan Status Ekonomi', riwayat_pekerjaan, setRiwayatPekerjaan, 'riwayat_pekerjaan'],
        ['Lingkungan Tempat Tinggal', lingkungan, setLingkungan, 'lingkungan'],
        ['Riwayat Kesehatan (Status Kesehatan Saat Ini)', kesehatan_saatini, setKesehatanSaatini,'kesehatan_saatini'],
        ['Riwayat Kesehatan (Riwayat Kesehatan Masa Lalu)', kesehatan_masalalu, setKesehatanMasalalu,'kesehatan_masalalu'],
        ['Pola Fungsional', pola_fungsional, setPolaFungsional,'pola_fungsional'],
        ['Pemeriksaan Fisik', pemeriksaan_fisik, setPemeriksaanFisik,'pemeriksaan_fisik'],
        ['Pengkajian Khusus', pengkajian_khusus, setPengkajianKhusus,'pengkajian_khusus'],
    ]
}