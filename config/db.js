const mongoose = require('mongoose'); 
// importa la biblioteca mongoose para conectarse a mongodb

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/veterinaria', {
            useNewUrlParser: true,          // usa el nuevo parser de url
            useUnifiedTopology: true        // usa el nuevo motor de conexion
        });
        console.log('✅ connexio a mongodb establerta (config/db.js)');
        // muestra mensaje de exito
    } catch (err) {
        console.error('❌ error connectant a mongodb:', err);
        // muestra error si falla la conexion
    }
};

module.exports = connectDB;
// exporta la funcion para usarla en otros archivos
