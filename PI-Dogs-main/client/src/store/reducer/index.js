import {
    GET_DOGS
} from '../action/index'

const initialState = {
    allDogs: []
}
export default function rootReducer(state = initialState, { type, payload }) {

    switch (type) {
        case GET_DOGS: return {
            ...state,
            allDogs: payload
        }
        default: return state
    }
}