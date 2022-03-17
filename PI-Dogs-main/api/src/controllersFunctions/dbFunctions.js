const { Dog, Temperament } = require('../db')
const axios = require('axios')

const getTemperaments =async (req,res)=>{
   /*  var allTemperaments = await Temperament.findAll()
    return res.json(allTemperaments) */
    
    try {
        let query = await Temperament.findAll({
            order: [['name', 'asc']]
        });

        if (query) {
            res.json(query);
        } else {
            res.json('Not found');
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

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
const getAllDogByDb = async () => {
    const dogsByDb = Dog.findAll({
        include: {
            model: Temperament,
        }
    })
    return dogsByDb
  

}
const createDog = async (req, res) => {
try{

    const { id, name, height, weight, life_span,temperaments } = req.body;
    const dog = await helperForCondition(id, name, height, weight, life_span,temperaments);
    dog === 'error'
        ? res.status(404).send({ error: 'dog not created' })
        : res.status(200).send({ success: 'dog created' })
}catch(error){
    console.log(error)
}
}
const helperForCondition = async (id, name, height, weight, life_span,temperaments) => {
    try {
        if (name) {
            let dog = await Dog.create({
                name,
                id,
                weight,
                height,
                life_span,
                

            })
            await dog.addTemperament(temperaments)
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
    dbTemperaments,
    getTemperaments
}