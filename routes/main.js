const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/',mainController.index);
router.get('/creditos',mainController.mostrarCreditos);
router.get('*', mainController.error);


module.exports = router;