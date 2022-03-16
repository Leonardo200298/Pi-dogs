const { Router } = require('express');
const router = Router();
const {getAllDogs} = require('../controllersFunctions/apiFunctions')
const {createDog,getDogById} = require('../controllersFunctions/dbFunctions')

router.get('/',getAllDogs);//idRaza}
router.get('/:idRaza',getDogById)
router.post('/dog', createDog);

module.exports = router;