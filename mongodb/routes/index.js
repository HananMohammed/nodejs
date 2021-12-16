var express = require('express');
var router = express.Router();

const UserController = require('../controller/UserController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CRUD' });
});

router.post('/insert',UserController.insertUsers);
router.get('/getUsers',UserController.getUsers)
router.post('/update', UserController.updateUser)
router.post('/delete', UserController.deleteUSer)

module.exports = router;
