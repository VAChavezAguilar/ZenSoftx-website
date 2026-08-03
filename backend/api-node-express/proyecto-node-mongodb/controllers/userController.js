const Usuario = require('../models/Usuario');

exports.createUser = async (req, res) => {
    try {
     const nuevo = await Usuario.create(req.body);
     res.status(201).json(nuevo);
    } catch (error) {
        res.status(400).json({
            error: error.mesagge
        });
    }
};

exports.listUsers = async (req, res) => {
    
    try{
        const users = await Usuario.find();
        res.json(users);
    }catch(error) {
        res.status(500).json({
            error: error.message
        });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updated = await Usuario.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.deleteUser = async (req, res) => {
    try{
        await Usuario.findByIdAndDelete(req.params.id);
        res.json({ message: "Usuario eliminado"});
    }catch(error){
        res.status(400).json({
            error: error.message
        });
    }
}

