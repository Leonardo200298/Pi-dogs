const { Router } = require('express');
const router = Router();
const { getTemperaments } = require('../controllersFunctions/dbFunctions')

router.get('/temperaments', getTemperaments)

module.exports = router;