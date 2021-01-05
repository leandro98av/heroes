const express = require('express');

const router = express.Router();

const heroesController = require('../controllers/heroesController');

router.get('/', heroesController.heroes);
router.get('/detalle/:id', heroesController.heroeDetalle);
router.get('/detalle/:id/:ok?', heroesController.heroeDetalleOpcional);

module.exports = router;