const { Dog, Temperament } = require('../db')
const {getAllDogs} = require('../controllersFunctions/apiFunctions')
const axios = require('axios')

async function dbTemperaments() {
    const { data } = await axios.get('https://api.thedogapi.com/v1/breeds')
    data.map((n) => {
        Temperament.findOrCreate({
            where: {
                name: n.name
            }
        })
    })
}
const getAllDogByDb =async () => {
  /*   const dogsByDb = Dog.findAll({
        include: {
            model: Temperament,
        }
    })
    return dogsByDb */
    var dogsDB = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });
    return dogsDB;
}
const createDog = async (req, res) => {

    const { id, name, height, weight, life_span, temperament } = req.body;
    const dog = await helperForCondition(id, name, height, weight, life_span, temperament);
    dog === 'error'
        ? res.status(404).send({ error: 'dog not created' })
        : res.status(200).send({ success: 'dog created' })

      

}
const helperForCondition =async (id, name, height, weight, life_span, temperament) => {
    try {
        if (name) {
            let dog = await Dog.create({
                name,
                id,
                weight,
                height,
                life_span,

            })
            await dog.addTemperament(temperament)
        } else {
            return 'error'
        }
    } catch (error) {
        console.log(error)
        console.log('Error in createDog')
    }
}
//funcion en la cual busco en la api y en la db
const getDogById =async (req,res)=>{
    try{

        const {idRaza} = req.params;
        const allDogs = await getAllDogs();
        console.log(allDogs)
        if (!idRaza){
            res.status(404).send("Couldn't find")
        }else{
            const dog = allDogs.find((dogg)=>dogg.id.toString()===idRaza)
            res.status(200).send(dog);
        }
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    getAllDogByDb,
    createDog,
    dbTemperaments,
    getDogById
}