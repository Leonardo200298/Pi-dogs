const { Router } = require('express');
const dogsRoute = require('./dogs.js')
const temperamentRoute =require('./temperament')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', dogsRoute)
router.use('/temperament', temperamentRoute)

module.exports = router;
