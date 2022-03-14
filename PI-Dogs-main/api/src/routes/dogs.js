const { Router } = require('express');
const router = Router();
const axios = require('axios')
const API = 'https://api.thedogapi.com/v1/breeds?key=';
const APIKEY = '350b7c31-14a9-4f82-ba04-d95e89453761'

router.get('/', (req,res)=>{
   /*  let dogData =await axios.get(API+APIKEY)
    return res.send(dogData) */
    let dogData = axios.get(API+APIKEY)
    Promise.all([dogData])
    .then((respuesta)=>{
        return res.send(respuesta)
    })
})

module.exports = router;