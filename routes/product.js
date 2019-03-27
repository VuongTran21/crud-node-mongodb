const router = require('express').Router();

const productController = require('../controllers/product');

router.post('/create', productController.create);

router.get('/:id', productController.show);

router.put('/:id', productController.update);

router.delete('/:id', productController.delete);

module.exports = router;