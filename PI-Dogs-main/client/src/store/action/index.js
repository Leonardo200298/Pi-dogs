export const GET_DOGS = "GET_DOGS"
const BACK = 'http://localhost:3001/api/'
const axios = require('axios');
//console.log(BACK)

export function getAllDogs() {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(BACK)

            dispatch({ type: GET_DOGS, payload: data })

        }

        catch (error) {
            console.log(error)
        }

    }
}