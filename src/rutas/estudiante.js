//Alejandro Parra Jimenez
const express = require('express');
const router = express.Router();

const controladorEstudiante = require('../controladores/controladorEstudiante');
router.get('/', controladorEstudiante.list);
router.post('/annyadir', controladorEstudiante.save);
router.get('/borrar/:nia', controladorEstudiante.delete);
router.get('/modificar/:nia', controladorEstudiante.edit);
router.post('/modificar/:nia', controladorEstudiante.update);

module.exports=router;