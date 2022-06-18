import React, { useState } from 'react'
import { NativeBaseProvider, Fab, Icon, Text, Divider } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import AnalisisData from '../analisis-data';
import PrioritasMasalah from '../prioritas-masalah';
import IntervensiKeperawatan from '../intervensi-keperawatan';
import ImplementasiKeperawatan from '../implementasi-keperawatan';
import EvaluasiKeperawatan from '../evaluasi-keperawatan';
import { connect } from "react-redux";

const index = (props) => {
    const [page, setPage] = useState(0)
    
    const nextPage = () => {
        page + 1 < pageView.length ?
            setPage(page + 1)
            : null
    }
    
    const pageView = [
        ['ANALISIS DATA', <AnalisisData props={props} nextPage={nextPage} />],
        ['PRIORITAS MASALAH', <PrioritasMasalah props={props} nextPage={nextPage} />],
        ['INTERVENSI KEPERAWATAN', <IntervensiKeperawatan props={props} nextPage={nextPage} />],
        ['IMPLEMENTASI KEPERAWATAN', <ImplementasiKeperawatan props={props} nextPage={nextPage} />],
        ['EVALUASI KEPERAWATAN', <EvaluasiKeperawatan props={props} nextPage={nextPage} />]
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

const mapStateToProps = (state) => {
    return {
        USER: state.userReducer.userState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SET_USER: (value) => dispatch({ type: 'SET_USER', value: value }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
