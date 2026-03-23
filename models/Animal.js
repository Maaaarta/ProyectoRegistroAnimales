const mongoose = require('mongoose');
// importa mongoose para definir el esquema

const animalSchema = new mongoose.Schema({
    nom: { type: String, required: true },          // nombre obligatorio
    especie: { type: String, required: true },      // especie obligatoria
    edat: { type: Number, required: true },         // edad obligatoria
    propietari: { type: String, required: true },   // nombre del propietario obligatorio
    observacions: { type: String }                  // campo opcional
});

module.exports = mongoose.model('Animal', animalSchema);
// exporta el modelo animal basado en el esquema
