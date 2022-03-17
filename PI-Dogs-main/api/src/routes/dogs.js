const { Router } = require('express');
const router = Router();
const { getAllDogs,getAllDogsForSearchId} = require('../controllersFunctions/apiFunctions')
const { createDog } = require('../controllersFunctions/dbFunctions')


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
