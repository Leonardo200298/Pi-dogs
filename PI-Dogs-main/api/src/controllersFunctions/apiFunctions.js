const axios = require('axios')
const API = 'https://api.thedogapi.com/v1/breeds?key=';
const APIKEY = '350b7c31-14a9-4f82-ba04-d95e89453761'
const { getAllDogByDb } = require('../controllersFunctions/dbFunctions')

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
            weight: info.weight,
            height: info.height 
           
        };
    });
    return apiInfo;
}
const getAllDogs = async (req, res) => {
   
 
    try {
        const [db, api] = await Promise.all([getAllDogByDb(), getDogsByApi()])
        const allDogsApiAndDb = [...db, ...api]
       if(req.params.name){
           var nameDog = findNameOfDog(allDogsApiAndDb,req.params.name)
           res.send(nameDog)
       }
        res.send(allDogsApiAndDb)

    } catch (error) {
        console.log(error)
    }
    

}
const findNameOfDog = async (allDogsApiAndDb, name)=>{
    var dogFilter = allDogsApiAndDb.filter((dog)=>{
        return dog.name===name
    })
    
    if (!dogFilter.length){
        let dataOfEndPoint = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
        dataOfEndPoint = dataOfEndPoint.data;
        return ([
            {
                id: info.id,
                name: info.name,
                image: info.image.url,
                breed_group: info.breed_group,
                temperament: info.temperament,
                life_span: info.life_span,
                weight: info.weight,
                height: info.height
            }
        ])
    }
    
    return dogFilter
}
const getAllDogsForSearchId = async () => {
    try {
        const [db, api] = await Promise.all([getAllDogByDb(), getDogsByApi()])
        const allDogsApiAndDb = [...db, ...api]
        return allDogsApiAndDb

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getAllDogs,
    getAllDogsForSearchId

}