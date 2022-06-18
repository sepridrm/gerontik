const initialState = {
    pasienState: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PASIENS':
            return {
                ...state,
                pasienState: action.value
            }

        case 'RESET_STATE':
            return initialState

        default:
            return state;
    }
}