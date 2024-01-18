import React, { useState } from 'react'

export const initials = (bukukehidupan) => {
    const [pengantar, setPengantar] = useState( bukukehidupan && bukukehidupan.pengantar_hidup ? JSON.parse(bukukehidupan.pengantar_hidup) : [
        { label: 'Saya senang dipanggil', placeholder: 'Nama panggilan pasien', value: '', key: 0 },
        { label: 'Nama ibu', placeholder: 'Nama ibu pasien', value: '', key: 1 },
        { label: 'Pekerjaan ibu', placeholder: 'Pekerjaan ibu pasien', value: '', key: 2 },
        { label: 'Nama ayah', placeholder: 'Nama ayah pasien', value: '', key: 3 },
        { label: 'Pekerjaan ayah', placeholder: 'Pekerjaan ayah pasien', value: '', key: 4 },
        { label: 'Anak ke', placeholder: 'Pasien anak ke ?', value: '', key: 5, keyboard: 'numeric' },
    ])
    const [masa_kecil, setMasaKecil] = useState(bukukehidupan && bukukehidupan.masa_kecil ? JSON.parse(bukukehidupan.masa_kecil) : [
        { label: 'Apakah yang anda ingat masa kecil anda?', placeholder: 'Diwaktu kecil Oma Hasnah pernah tinggal di Prabumulih dan sekolah disana...', value: '', key: 0 },
        { label: 'Kenangan apa yang anda ingat saat sekolah?', placeholder: 'Ketika SD Oma Hasnah senang membaca Al-Quran dengan temannya setelah sholat ashar...', value: '', key: 1 },
        { label: 'Mata pelajaran yang paling anda sukai?', placeholder: 'Mata pelajaran yang disukai Oma Hasnah adalah mata pelajaran sejarah...', value: '', key: 2 },
        { label: 'Apa yang paling anda bisa?', placeholder: 'Bercerita dengan orang lain tentang buku yang telah ia baca...', value: '', key: 3 },
        { label: 'Apakah kesulitan yang anda hadapi?', placeholder: 'Oma Hasnah kesulitan mengingat kisah sejarah yang sudah ia baca...', value: '', key: 4 },
        { label: 'Adakah kenangan tersendiri(khusus)', placeholder: 'Ketika masih SD Oma Hasnah membantu ayahnya membuat sumur...', value: '', key: 5 },
    ])
    const [pekerjaan, setPekerjaan] = useState(bukukehidupan && bukukehidupan.pekerjaan ? JSON.parse(bukukehidupan.pekerjaan) : [
        { label: 'Apakah pekerjaan pertama anda?', placeholder: 'Menjadi penyiar radio di Atmajaya, ia sangat senang karena...', value: '', key: 0 },
        { label: 'Dimana anda bekerja? (termasuk jika dirumah)', placeholder: 'Sebelum menjadi PNS sampai kini pensiun Oma Hasnah bekerja di stasiun radio Atmajaya...', value: '', key: 1 },
        { label: 'Bagaimana anda bekerja? Apakah anda juga mengerjakan pekerjaan orang lain?', placeholder: 'Oma Hasnah bekerja di stasiun radio dari pukul 16.00 WIB s.d 22.00 WIB...', value: '', key: 2 },
        { label: 'Jika anda mendapatkan kesempatan, apakah anda ingin pekerjaan yang sama atau yang lain?', placeholder: 'Bila Oma Hasnah mendapat kesempatan lagi, ia ingin menjadi penulis...', value: '', key: 3 },
        { label: 'Apa kenangan masa bekerja yang berarti bagi anda?', placeholder: 'Ketika menjadi penyiar radio ia mempunyai banyak penggemar...', value: '', key: 4 },
    ])
    const [relasi_penting, setRelasiPenting] = useState(bukukehidupan && bukukehidupan.relasi_penting ? JSON.parse(bukukehidupan.relasi_penting) : [
        { label: 'Siapakah orang yang sangat berarti dalam hidup anda?', placeholder: 'Ibu Ida yang merupakan Ibu Oma Hasnah yang sangat berjasa dalam hidupnya...', value: '', key: 0 },
        { label: 'Apakah anda menikah?', placeholder: 'Oma Hasnah tidak menikah, ketika masih muda ia kesulitan dalam ekonomi dan harus menghidupi 4 adiknya...', value: '', key: 1 },
        { label: 'Adakah kenangan saat hari pernikahan anda? Tanggal, tempat, dan busana yang dipakai?', placeholder: 'Tidak ada', value: '', key: 2 },
        { label: 'Apakah anda mempunyai anak?', placeholder: 'Tidak mempunyai anak', value: '', key: 3 },
        { label: 'Apakah anda mempunyai binatang peliharaan?', placeholder: 'Oma Hasnah mempunyai anjing yang bernama boy', value: '', key: 4 },
    ])
    const [tempat_penting, setTempatPenting] = useState(bukukehidupan && bukukehidupan.tempat_penting ? JSON.parse(bukukehidupan.tempat_penting) : [
        { label: 'Dimana anda merasa kerasan?', placeholder: 'Dulu tempat yang paling nyaman di ruang tv rumah, kalau sekarang di panti Werdha Dharma...', value: '', key: 0 },
        { label: 'Kenangan apa yang anda ingat di tempat tersebut? Bangunan, tempat belanja, masyarakatnya?', placeholder: 'Rumah Oma hasnah sangat besar terdiri dari 7 kamar sehingga...', value: '', key: 1 },
        { label: 'Apakah ada tempat lain yang begitu penting(dulu/sekarang)? (Tempat hiburan, atau tempat hal-hal penting terjadi)', placeholder: 'Menurut Oma Hasnah tidak ada tempat yang istimewa, baginya semua tempat sama saja', value: '', key: 2 },
    ])
    const [kegiatan_sosial, setKegiatanSosial] = useState(bukukehidupan && bukukehidupan.kegiatan_sosial ? JSON.parse(bukukehidupan.kegiatan_sosial) : [
        { label: 'Apakah yang biasa anda lakukan di waktu luang?', placeholder: 'Bercerita dengan teman sekamar, tidur dan doa. Oma Hasnah juga senang berkunjung ke rumah temannya Oma Tuti...', value: '', key: 0 },
        { label: 'Apakah kesukaan anda? (Termasuk hal-hal penting, tempat penting, aktifitas sehari-hari)', placeholder: 'Oma Hasnah sangat senang membaca buku, mendengarkan musik klasik...', value: '', key: 1 },
    ])
    const [peristiwa_hidup, setPeristiwaHidup] = useState(bukukehidupan && bukukehidupan.peristiwa_hidup ? JSON.parse(bukukehidupan.peristiwa_hidup) : [
        { label: 'Adakah peristiwa/hal lain yang mempunyai pengaruh dalam hidup anda? (Perorangan, perjalanan, kehilangan keluarga)', placeholder: 'Oma Hasnah tidak menyelesaikan kuliahnya dan mempunyai banyak masalah sehingga pernah dirawat di RSJ Ernaldi Bahar...', value: '', key: 0 },
    ])
    const [pensiun, setPensiun] = useState(bukukehidupan && bukukehidupan.pensiun ? JSON.parse(bukukehidupan.pensiun) : [
        { label: 'Apakah hal yang menyenangkan dan tidak menyenangkan ketika menjadi tua? (Cucu bepergian atau waktu mengejar minat)', placeholder: 'Menyenangkat : bisa menasehati anak-anak dan mengambil keputusan sendiri. Tidak nyenangkan : mata Oma Hasnah menjadi kabur dan kakinya sakit...', value: '', key: 0 },
        { label: 'Tuliskan hal apa saja yang mempengaruhimu pensiun? (Peristiwa, orang, penyakit)', placeholder: 'Dulu Oma Hasnah pernah dirampok di rumahnya sehingga seluruh barangnya habis. Mempunyai penyakit DM sehingga bebrapa kainya diamputasi...', value: '', key: 1 },
    ])
    const [kehidupan_sekarang, setKehidupanSekarang] = useState(bukukehidupan && bukukehidupan.kehidupan_sekarang ? JSON.parse(bukukehidupan.kehidupan_sekarang) : [
        { label: 'Apa yang penting untukku sekarang? Makanan dan minuman', placeholder: 'Makanan pempek, tekwan, model dan minuman teh manis, namun sekarang tidak bisa lagi karena adanya penyakit DM...', value: '', key: 0 },
        { label: 'Apakah anda mempunyai pilihan lain untuk jam makan?', placeholder: 'Tidak ada, apabila lapar ia membeli cemilan sendiri...', value: '', key: 1 },
        { label: 'Apakah anda memerlukan bantuan untuk makan dan minum?', placeholder: 'Tidak, karena masih bisa makan dan minum sendiri...', value: '', key: 2 },
    ])
    const [penampilan, setPenampilan] = useState(bukukehidupan && bukukehidupan.penampilan ? JSON.parse(bukukehidupan.penampilan) : [
        { label: 'Apa yang penting pada penampilanku? (Pakaian, rambut, kuku dll)', placeholder: 'Kerapian, ia sangat senang menggunakan daster tapi harus bersih dan rapi...', value: '', key: 0 },
        { label: 'Apakah anda membutuhkan bantuan untuk merawat diri?', placeholder: 'Butuh untuk di kamar mandi, karena takut terjatuh dan kakinya sering nyeri...', value: '', key: 1 },
        { label: 'Bagaimana anda ingin dilayani?', placeholder: 'Cepat dan tepat, serta keadaan lingkungan yang bersih terutama di toilet...', value: '', key: 2 },
        { label: 'Apakah anda punya pilihan lain untuk perawatan diri seperti halnya mandi? (mandi, sabun, parfum, dll)', placeholder: 'Ada, butuh sabun jenis lain yaitu sabun Giv karena meresap dikulitnya...', value: '', key: 3 },
        { label: 'Apakah anda punya kebiasaan rutin yang anda ingin orang ketahui?', placeholder: 'Tidak ada, untuk kebiasaan saat ini adalah hanya beribadah di kapel dengan teman-teman...', value: '', key: 4 },
    ])
    const [minat_hobi, setMinatHobi] = useState(bukukehidupan && bukukehidupan.minat_hobi ? JSON.parse(bukukehidupan.minat_hobi) : [
        { label: 'Musik apa yang anda sukai? (termasuk lagu favorit)', placeholder: 'Musik jenis klasik lagu dari sherly deasy...', value: '', key: 0 },
        { label: 'Apakah anda punya channel radio atau program televisi yang disukai?', placeholder: 'Oma Hasnah senang mendengarkan Pro 2 FM dan tidak suka menonton TV...', value: '', key: 1 },
        { label: 'Apakan anda punya minat/hobi lain? (Buku, majalah, olahraga, seni dll)', placeholder: 'Oma Hasnah sangat suka membaca...', value: '', key: 2 },
    ])
    const [suka_tidaksuka, setSukaTidaksuka] = useState(bukukehidupan && bukukehidupan.suka_tidaksuka ? JSON.parse(bukukehidupan.suka_tidaksuka) : [
        { label: 'Hal-hal yang kusuka', placeholder: 'Bihun dan mi tumis makanan yang ia sukai di panti. Sebenarnya ia suka pempek dan tekwan namun tidak dianjurkan karena kesehatannya...', value: '', key: 0 },
        { label: 'Hal-hal yang tidak kusuka', placeholder: 'Tidak ada, hanya saja ia akan menghindari makanan dan minuman yang terlalu manis...', value: '', key: 1 },
        { label: 'Apakah yang senang anda bicarakan? Topic apa yang mengganggu anda?', placeholder: 'Suka bercerita tentang generasi muda misalnya masalah kecantikan(make up). Yang mengganggu yaitu membuka rahasia teman(misal ada teman yang BAK berdiri)...', value: '', key: 2 },
        { label: 'Apa yang membuat anda santai/relax? Apa yang membuatmu stres atau tertekan?', placeholder: 'Oma Hasnah relax ketika bercerita dengan teman yang paling dekatnya yaitu Tuti...', value: '', key: 3 },
    ])
    const [orang_penting, setOrangPenting] = useState(bukukehidupan && bukukehidupan.orang_penting ? JSON.parse(bukukehidupan.orang_penting) : [
        { label: 'Siapakah orang yang penting bagi anda saat ini? (Nama dan hubungan)', placeholder: 'Orang yang penting baginya adalah Ibunya yang bernama Ida, sedangkan ayahnya sekarang sudah meniggal...', value: '', key: 0 },
    ])
    const [harapan, setHarapan] = useState(bukukehidupan && bukukehidupan.harapan ? JSON.parse(bukukehidupan.harapan) : [
        { label: 'Apakah anda punya rencana kedepan untuk perawatan anda selanjutnya? (Pengobatan khusus atau prioritas pilihan)', placeholder: 'Pengobatan untuk penyakit DM. Data dari pendamping : Obat yang diberikan dari RSJ jarang Oma Hasnah minum...', value: '', key: 0 },
        { label: 'Siapa yang anda inginkan membuat keputusan anda?', placeholder: 'Diri sendiri, karena dengan usianya sekarang hanya dialah yang bisa menentukan sesuatu untuk hidupnya...', value: '', key: 1 },
        { label: 'Apakah anda punya pertahanan diri?', placeholder: 'Pertahanan diri Oma Hasnah saat ini adalah iman dan berharap dapat meninggal dalam khusnul khatimah...', value: '', key: 2 },
        { label: 'Ikut sertakan hal lain yang penting bagi anda yang membantu orang lain mengerti cara terbaik merawat dan berkomunikasi', placeholder: 'Tidak ada, hanya ingin dilayani dengan sepat dan tepat...', value: '', key: 3 },
    ])

    return [
        ['Pengantar Hidup', pengantar, setPengantar, 'pengantar_hidup'],
        ['Masa Kecilku', masa_kecil, setMasaKecil, 'masa_kecil'],
        ['Pekerjaanku', pekerjaan, setPekerjaan, 'pekerjaan'],
        ['Relasi Penting', relasi_penting, setRelasiPenting,'relasi_penting'],
        ['Tempat-tempat Penting', tempat_penting, setTempatPenting,'tempat_penting'],
        ['Kegiatan Sosial dan Minat', kegiatan_sosial, setKegiatanSosial,'kegiatan_sosial'],
        ['Peristiwa Hidup yang Berarti', peristiwa_hidup, setPeristiwaHidup,'peristiwa_hidup'],
        ['Pensiun', pensiun, setPensiun,'pensiun'],
        ['Kehidupanku Sekarang', kehidupan_sekarang, setKehidupanSekarang,'kehidupan_sekarang'],
        ['Penampilanku', penampilan, setPenampilan,'penampilan'],
        ['Minat dan Hobi', minat_hobi, setMinatHobi,'minat_hobi'],
        ['Hal yang kusuka dan tidak suka', suka_tidaksuka, setSukaTidaksuka,'suka_tidaksuka'],
        ['Orang Penting bagi Saya Sekarang', orang_penting, setOrangPenting,'orang_penting'],
        ['Harapan untuk Pelayanan ke Depan', harapan, setHarapan,'harapan']
    ]
}