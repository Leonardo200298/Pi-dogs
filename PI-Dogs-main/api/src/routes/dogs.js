const { Router } = require('express');
const router = Router();
const { getAllDogs,getAllDogsForSearchId} = require('../controllersFunctions/apiFunctions')
const { createDog } = require('../controllersFunctions/dbFunctions')

/* router.get('/', async (req, res) => {
    try{
        res.send(await getAllDogs())
    }catch(error){
        console.log(error)
    }
    
}); */
router.get('/', getAllDogs)
router.get('/:idRaza', async (req, res) => {
    try {
        const { idRaza } = req.params;
        const allDogs = await getAllDogsForSearchId();
        if (!idRaza) {
            res.status(404).send("Couldn't find")
        } else {
            const dog = allDogs.find((dogg) => dogg.id.toString() === idRaza)
            res.status(200).send(dog);
        }

    } catch (error) {
        console.log(error)
    }
})
router.post('/dog', createDog);

module.exports = router;
/* async (req, res) => {
    try {
      const { idRaza } = req.params;
  
      if (idRaza) {
        const allDogs = await getAllDogs();
        const filtered = allDogs.filter((elem) => elem.id == idRaza);
        if (filtered.length > 0) return res.status(200).send(filtered);
        return res.status(404).send("The ID was not found");
      }
    }
    catch(err) {
      console.log(err)
      return res.status(404).json(err)
    }
  } */