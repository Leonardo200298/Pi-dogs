const { Router } = require('express');
const router = Router();
const axios = require('axios')
const API = 'https://api.thedogapi.com/v1/breeds?key=';
const APIKEY = '350b7c31-14a9-4f82-ba04-d95e89453761'

router.get('/', async (req, res) => {
    /*  let dogData =await axios.get(API+APIKEY)
     return res.send(dogData) */


    const dogData = await axios.get(API+APIKEY)
    //console.log(JSON.stringify(dogData.data))
    Promise.all([dogData])
    .then((respuesta)=>{
        const [dataOfDoggies] = respuesta
        return res.send(dataOfDoggies.data)
    })
})

module.exports = router;