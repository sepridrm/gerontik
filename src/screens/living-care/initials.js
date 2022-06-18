import React, { useState } from 'react'

export const initials = (livingcare) => {
    const [domain1, setDomain1] = useState( livingcare && livingcare.domain1 ? JSON.parse(livingcare.domain1) : [
        { label: 'Obat dan tindakan medis', placeholder: 'Lingkungan yang nyaman', value: '', key: 0 },
        { label: 'Data subjektif', placeholder: '-Klien mengatakan membutuhkan lingkungan yang berish dan nyaman \n-Klien mengatakan membutuhkan penerangan yang cukup', value: '', key: 1 },
        { label: 'Tujuan keperawatan', placeholder: 'Lingkungan yang bersih dan nyaman', value: '', key: 2 },
        { label: 'Tindakan voluntir', placeholder: '-Menyediakan alas kaki untuk pasien\n-Menyediakan pakaian yang bersih\n-Ruangan yang nyaman untuk istirahat', value: '', key: 3 },
        { label: 'Tindakan perawat', placeholder: '-Menyediakan peralatan\n-Menyediakan alas kaki yang aman dan nyaman\n-Membuat daftar ADL untuk klien', value: '', key: 4 },
        { label: 'Tindakan oleh profesi lain', placeholder: '-Untuk fisioterapi, mengamati cara jalan pasien\n-Untuk kebersihan, selalu membersihkan ruangan pasien', value: '', key: 5 },
        { label: 'Evaluasi', placeholder: 'Evaluasi setiap 6 bulan atau 1 tahun sekali', value: '', key: 6 },
    ])
    const [domain2, setDomain2] = useState(livingcare && livingcare.domain2 ? JSON.parse(livingcare.domain2) : [
        { label: 'Data subjektif', placeholder: '-Klien mengatakan selalu mengikuti kegiatan di panti\n-Klien mengatakan selalu mengikuti doa setiap hari', value: '', key: 0 },
        { label: 'Tujuan', placeholder: 'Aktifitas sehari-hari mempunyai kegiatan yang bermakna', value: '', key: 1 },
        { label: 'Tindakan voluntir', placeholder: '-Mendampingi klien pada hal-hal tertentu\n-Klien membutuhkan pengawasan untuk hal-hal sulit', value: '', key: 2 },
        { label: 'Tindakan perawat', placeholder: '-Membuat jadwal kunjungan ketempat keluarga\n-Membuat jadwal konseling', value: '', key: 3 },
        { label: 'Tindakan profesi lain', placeholder: '-Melibatkan ahli rohani apabila kejiwaan klien terguncang\n-Melibatkan psikiater apabila halusinasi', value: '', key: 4 },
        { label: 'Evaluasi', placeholder: 'Evaluasi setiap 6 bulan atau 1 tahun sekali', value: '', key: 5 },
    ])
    const [domain3, setDomain3] = useState(livingcare && livingcare.domain3 ? JSON.parse(livingcare.domain3) : [
        { label: 'Data subjektif', placeholder: '-Klien mengatakan merasa nyaman dengan keadaan panti\n-Klien membutuhkan bacaan untuk hobi nya', value: '', key: 0 },
        { label: 'Tujuan', placeholder: 'Klien merasa nyaman dan sejahtera bagi mental, fisik maupun spiritual', value: '', key: 1 },
        { label: 'Tindakan voluntir', placeholder: '-Menemani klien ketika ingin bercerita tentang kerisauan hati nya', value: '', key: 2 },
        { label: 'Tindakan perawat', placeholder: '-Perhatikan mood klien, karena masih mengkonsumsi obat\n-Membantu klien dalam rentang gerak aktif\n-Membantu aktifitas klien', value: '', key: 3 },
    ])
    const [domain4, setDomain4] = useState(livingcare && livingcare.domain4 ? JSON.parse(livingcare.domain4) : [
        { label: 'Data subjektif', placeholder: '-Klien mengatakan menderita Diabetes Melitus\n-Klien mengatakan setiap malam disuntik insulin', value: '', key: 0 },
        { label: 'Tujuan', placeholder: 'Kestabilan gula darah', value: '', key: 1 },
        { label: 'Tindakan voluntir', placeholder: '-Amati apabila mulai muncul halusinasi\n-Menjaga dan anjurkan gizi seimbang', value: '', key: 2 },
        { label: 'Tindakan perawat', placeholder: '-Lakukan check up ke RS Ernaldi Bahar\n-Pantau psikologis klien\-Lakukan pengecekan gula darah', value: '', key: 3 },
    ])

    return [
        ['Perawatan Lingkungan', domain1, setDomain1, 'domain1'],
        ['Partisipasi', domain2, setDomain2, 'domain2'],
        ['Kesejahteraan', domain3, setDomain3, 'domain3'],
        ['Health and Care', domain4, setDomain4,'domain4']
    ]
}