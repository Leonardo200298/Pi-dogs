export const GET_DOGS = "GET_DOGS"
export const GET_NAME_DOG = "GET_NAME_DOG"
const BACK = 'http://localhost:3001/api'
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
export function getByName(name){
    return async function (dispatch){
        try{
            const {data} = await axios.get(BACK + "?name=" + name)
            console.log(name)
            dispatch({type:GET_NAME_DOG,payload:data})
           
        }catch(error){
            console.log(error)
            
        }
    }
}