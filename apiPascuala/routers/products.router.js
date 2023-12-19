const express = require('express');
const { getAll, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');
const uploadStorage = require('../middleware/upload.middleware');
const router = express.Router();



router.get('/',getAll);
router.post('/',uploadStorage.array('images', 3),createProduct);
router.put('/:id',uploadStorage.array('images', 3),updateProduct);
router.delete('/:id',deleteProduct);


module.exports = router;