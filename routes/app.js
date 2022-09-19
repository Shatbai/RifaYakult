let router = require('express').Router();

let PagesController = require('../controllers/PagesController');
let PersonasController = require('../controllers/PersonasController');

router.get('/', PagesController.index);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/registrar', PagesController.registrar);

router.get('/aleatorio',PagesController.aleatorio);

router.get('/mireferencia',PagesController.darreferencia);

router.get('/registros',PagesController.registros);

router.get('/buscar', PersonasController.create);

router.post('/buscar', PersonasController.buscar);

router.get('/:ref', PersonasController.show);

router.put('/aleatorio', PersonasController.update);


module.exports = router;