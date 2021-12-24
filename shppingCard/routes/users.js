var express = require('express');
var router = express.Router();

 
router.get('/signup', function(req, res, next) {
   res.render('user/signup')
});

router.post('/signup', function(req, res, next){
     res.send('OKKKKK')
});
module.exports = router;
