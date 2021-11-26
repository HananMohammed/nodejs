var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/info/:id', function(req, res, next) {
  
  res.render('info',{id:req.params.id});
});

$validation = [
  check('email', 'Email length should be 10 to 30 characters').notEmpty().isEmail().isLength({ min: 10, max: 30 }),
  check('name', 'Name length should be 5 to 20 characters ad string').notEmpty().isAlpha().isLength({ min: 5, max: 20 }),
  check('mobile', 'Mobile number should contains 10 digits').notEmpty().isLength({ min: 10, max: 10 }),
  check('password', 'Password length should be 6 to 10 characters').notEmpty().isLength({ min: 6, max: 10 })
];
router.post('/info', $validation, (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      req.session.error = errors;
       res.redirect('/')
    }else{
       req.session.error = null;
      res.render('info',{id:req.params.id, success:'Congrates, You logged successfully...', errors:false})
     // res.redirect('info/'+req.body.name)
    }
})
module.exports = router;

