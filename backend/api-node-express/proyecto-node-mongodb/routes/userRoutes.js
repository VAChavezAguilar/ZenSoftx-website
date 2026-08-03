const express = require('express');
const router = express.Router();

const {
    createUser, listUsers, updateUser, deleteUser
} = require('../controllers/userController');

router.post('/users', createUser);
router.get('/users', listUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;