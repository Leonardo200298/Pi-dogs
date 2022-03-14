const {Dog,Temperament} = require('../db')

const getAllDogByDb = ()=>{
    const dogsByDb = Dog.findAll({
        include:{
            model:Temperament,
        }
    })
    return dogsByDb
}
const createDog = (req,res)=>{
    const {id, name,height,weight,life_span} =req.body;
    const dog = Dog.create({
        name,
        id,
        weight,
        height,
        life_span
    })
    dog === 'error'
    ?res.status(404).send({error: 'dog not created'})
    :res.status(200).send(dog)
}

module.exports = {
    getAllDogByDb,
    createDog
}