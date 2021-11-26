var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login', success:req.session.success,error:req.session.error } );
});


router.get('/person', function(req, res, next){
  res.render('person', { title: 'Person'});
})

module.exports = router;
