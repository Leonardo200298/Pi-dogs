const axios = require('axios')
const API = 'https://api.thedogapi.com/v1/breeds?key=';
const APIKEY = '350b7c31-14a9-4f82-ba04-d95e89453761'
const {getAllDogByDb} = require('../controllersFunctions/dbFunctions')

const getDogsByApi = async () => {
    const dogData = await axios.get(API + APIKEY);
    const apiInfo = await dogData.data.map(info => {
        return { // requiere datos de la API thedogapi.com
            id: info.id,
            name: info.name,
            image: info.image.url,
            breed_group: info.breed_group,
            temperament: info.temperament,
            life_span: info.life_span,
            weight_min: parseInt(info.weight.metric.slice(0, 2).trim()),
            weight_max: parseInt(info.weight.metric.slice(4).trim()),
            height_min: parseInt(info.height.metric.slice(0, 2).trim()),
            height_max: parseInt(info.height.metric.slice(4).trim()),
        };
    });
    return apiInfo;
}
const getAllDogs = async (req, res) => {
    try {
        const [db,api] = await Promise.all([getAllDogByDb(),getDogsByApi()])
        
        const allDogsApiAndDb = [...db,...api]
        
        res.send(allDogsApiAndDb)
    } catch (error) {
        console.log(error)
    }
  
}
module.exports = {
    getAllDogs
}