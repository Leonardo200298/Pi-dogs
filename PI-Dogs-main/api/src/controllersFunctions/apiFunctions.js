const axios = require('axios')
const API = 'https://api.thedogapi.com/v1/breeds?key=';
const APIKEY = '350b7c31-14a9-4f82-ba04-d95e89453761'
const {getAllDogByDb} = require('../controllersFunctions/dbFunctions')

const getDogsByApi = async () => {
    let dogsData;
    const dogData = await axios.get(API + APIKEY);
    await Promise.all([dogData])
        .then((respuesta) => {
            const [dataOfDoggies] = respuesta
            dogsData = dataOfDoggies.data.map((info) => {
                return ({
                    id:info.id,
                    name: info.name,
                    height:info.height,
                    weight:info.weight,
                    temperament:info.temperament,
                    life_span:info.life_span,
                    image:info.image.url
                })
            })
        })
    return dogsData
}
const allDogs = async (req, res) => {
    try {
        const [db,api] = await Promise.all([getAllDogByDb(),getDogsByApi()])
        const allDogsApiAndDb = [...db,...api]
        res.send(allDogsApiAndDb)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    allDogs
}