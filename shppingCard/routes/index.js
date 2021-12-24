var express = require('express');
var router = express.Router();
const ProductController = require('../controller/ProductController')
/* GET home page. */
router.get('/', ProductController.getProducts);

module.exports = router;
