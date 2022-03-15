const { Dog, Temperament } = require('../db')
const axios = require('axios')

/* async function getTemperament(req, res) {
    const allTemperaments = await Temperament.findAll()
    res.send(allTemperaments);
}
 */
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
const getAllDogByDb = () => {
    const dogsByDb = Dog.findAll({
        include: {
            model: Temperament,
        }
    })
    return dogsByDb
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
module.exports = {
    getAllDogByDb,
    createDog,
  /*   getTemperament, */
    dbTemperaments
}