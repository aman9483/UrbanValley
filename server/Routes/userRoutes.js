const express = require('express');
const router = express.Router();
const {
  newUser,        
  getAllUser,    
  getSingleUser,
  deleteUser,
  loginUser,
  logoutUser,
} = require('../Controllers/userController');
const authMiddleware = require('../Middleware/AuthMiddleware'); 

router.post('/register', newUser);


router.post('/login', loginUser);


router.get('/logout', authMiddleware, logoutUser);


router.get('/AllUsers', authMiddleware, getAllUser);  

router.get('/:id', authMiddleware, getSingleUser);  


router.delete('/:id', authMiddleware, deleteUser);  

module.exports = router;
