import {
    GET_DOGS,
    GET_NAME_DOG
} from '../action/index'

const initialState = {
    allDogs: [],
    dogName: []
}
export default function rootReducer(state = initialState, { type, payload }) {

    switch (type) {
        case GET_DOGS: return {
            ...state,
            allDogs: payload
        }
        
        case GET_NAME_DOG: return {
            ...state,
            dogName: payload
            
        }
        default: return state
    }
}