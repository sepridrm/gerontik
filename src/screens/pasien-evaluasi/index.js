import React from 'react'
import PasienEvaluasi from "./PasienEvaluasi";

const index = (props) => {
    const data = props.route.params.data

    const form_data = {
        data
    }

    return (
        <PasienEvaluasi
            props={props}
            form_data={form_data}
        />
    )
}

export default index