let router = require('express').Router();

let PagesController = require('../controllers/PagesController');

router.get('/', PagesController.index);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/registrar', PagesController.registrar);

router.get('/aleatorio',PagesController.aleatorio);

router.get('/miboleto',PagesController.verboleto);

router.get('/registros',PagesController.registros);


module.exports = router;