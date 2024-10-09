const express = require('express');
const router = express.Router();
const {
    newUser,        
    getAllUser,    
    getSingleUser,
    deleteUser
} = require('../Controllers/userController');

router.post('/', newUser);


router.get('/AllUsers', getAllUser);  


router.get('/:id', getSingleUser);  


router.delete('/:id', deleteUser);  

module.exports = router;
