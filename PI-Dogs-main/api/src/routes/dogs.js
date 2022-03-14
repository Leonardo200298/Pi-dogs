const { Router } = require('express');
const router = Router();
const {allDogs} = require('../controllersFunctions/apiFunctions')
const {createDog} = require('../controllersFunctions/dbFunctions')

router.get('/',allDogs);
router.post('/dog', createDog)

module.exports = router;