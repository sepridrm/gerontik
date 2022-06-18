import React, { useState } from 'react'
import HidupSehat from '../hidup-sehat'
import KeluhanTindakan from '../keluhan-tindakan'
import { NativeBaseProvider, Fab, Icon, Text, Divider } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import KunjunganPasien from '../kunjungan-pasien';

const index = (props) => {
    const [page, setPage] = useState(0)
    
    const nextPage = () => {
        page + 1 < pageView.length ?
            setPage(page + 1)
            : null
    }
    
    const pageView = [
        ['Anjuran Hidup Sehat', <HidupSehat props={props} nextPage={nextPage} />],
        ['Catatan Keluhan dan Tindakan', <KeluhanTindakan props={props} nextPage={nextPage} />],
        ['Kunjungan Pasien', <KunjunganPasien props={props} nextPage={nextPage} />]
    ]

    return (
        <NativeBaseProvider>
            <Text px={5} py={2} bg="white" fontFamily="bold" fontSize={25}>{`${page + 1}. ${pageView[page][0]}`}</Text>
            <Divider />
            {pageView[page][1]}
            {page > 0 ?
                <Fab
                    placement="bottom-left"
                    onPress={() => setPage(page - 1)}
                    position="absolute"
                    icon={<Icon color="white" as={<Ionicons name="ios-arrow-back-outline" />} size="sm" />}
                />
                : null}

            {page < pageView.length - 1 ?
                <Fab
                    placement="bottom-right"
                    onPress={() => setPage(page + 1)}
                    position="absolute"
                    icon={<Icon color="white" as={<Ionicons name="ios-arrow-forward-outline" />} size="sm" />}
                />
                : null}
        </NativeBaseProvider>
    )
}

export default index
