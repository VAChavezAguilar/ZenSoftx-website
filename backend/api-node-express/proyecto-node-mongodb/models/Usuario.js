const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellidos: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    telefono: {
        type: Number,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Usuario', userSchema);