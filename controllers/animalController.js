const Animal = require('../models/Animal');
// importa el modelo animal

exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals); // responde con todos los animales
    } catch (err) {
        res.status(500).json({ error: err.message }); // error interno
    }
};

exports.createAnimal = async (req, res) => {
    try {
        const { nom, especie, edat, propietari, observacions } = req.body;

        const nouAnimal = new Animal({
            nom,
            especie,
            edat,
            propietari,
            observacions,
            imatge: req.file ? req.file.filename : null // guarda imagen si existe
        });

        const animalDesat = await nouAnimal.save();
        res.status(201).json(animalDesat); // responde con el animal creado
    } catch (error) {
        console.error('error creant animal:', error);
        res.status(400).json({ error: 'error en crear l\'animal' }); // error de validacion o datos
    }
};

exports.deleteAnimal = async (req, res) => {
    try {
        await Animal.findByIdAndDelete(req.params.id);
        res.status(204).end(); // elimina el animal y no devuelve contenido
    } catch (err) {
        res.status(500).json({ error: err.message }); // error interno
    }
};

exports.updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedData = {
            nom: req.body.nom,
            especie: req.body.especie,
            edat: req.body.edat,
            propietari: req.body.propietari,
            observacions: req.body.observacions,
        };

        const updatedAnimal = await Animal.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedAnimal) {
            return res.status(404).json({ missatge: 'animal no trobat' }); // no se encontro
        }

        res.json(updatedAnimal); // responde con el animal actualizado
    } catch (error) {
        console.error(error);
        res.status(500).json({ missatge: 'error actualitzant l\'animal' }); // error interno
    }
};
