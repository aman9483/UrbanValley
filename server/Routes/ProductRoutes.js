const express = require('express');
const router = express.Router();
const { newProduct, getAllProduct, deleteProduct, getSingleProduct } = require('../Controllers/ProductController');

// POST request to create a new product
router.post('/', newProduct);

// GET request to retrieve all products
router.get('/', getAllProduct);

router.get('/:id', getSingleProduct);

router.delete('/:id', deleteProduct);

// Export the router
module.exports = router;
