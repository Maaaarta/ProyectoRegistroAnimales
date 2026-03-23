const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// GET - Llistar tots els animals
router.get('/animals', animalController.getAllAnimals);

// POST - Afegir un nou animal
router.post('/animals', animalController.createAnimal);

// PUT - Actualitzar un animal
router.put('/animals/:id', animalController.updateAnimal);

// DELETE - Esborrar un animal
router.delete('/animals/:id', animalController.deleteAnimal);

module.exports = router;