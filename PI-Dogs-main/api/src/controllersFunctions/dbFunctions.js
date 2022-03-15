const { Dog, Temperament } = require('../db')

const getAllDogByDb = () => {
    const dogsByDb = Dog.findAll({
        include: {
            model: Temperament,
        }
    })
    return dogsByDb
}
const createDog = async (req, res) => {
    try {
        const { id, name, height, weight, life_span, temperament } = req.body;
        const dog =await Dog.create({
            name,
            id,
            weight,
            height,
            life_span,
            
        })
        dog === 'error'
            ? res.status(404).send({ error: 'dog not created' })
            : res.status(200).send({ success: 'dog created' })
        await dog.addTemperament(temperament)  
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllDogByDb,
    createDog
}