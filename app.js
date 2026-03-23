const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api'); 

const app = express();
const PORT = 3003;

connectDB();

app.use(cors()); // Evita errors CORS
app.use(express.json());

// Rutes API
app.use('/api', apiRoutes);

// Ruta bàsica
app.get('/', (req, res) => {
    res.send('API Veterinària activa!');
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor escoltant al port ${PORT}`);
});