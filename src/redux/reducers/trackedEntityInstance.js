import { FETCH_TEIS, RECEIVE_TEIS } from "../types"


const initialState = {
    data: null,
    loading: true
}

export const fetchTeis = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case FETCH_TEIS:
            return { ...state, loading: true, data: null }
        case RECEIVE_TEIS:
            return { ...state, data: payload, loading: false }
        default:
            return state
    }
}