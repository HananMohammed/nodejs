var express = require('express');
var router = express.Router();
const User = require('../models/user')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert', function (req, res, next) {

  const user = new User({
    userName: req.body.username,
    userEmail: req.body.userEmail
  });

  user.save(( error, result) => {
    if (error) {
      console.log(error)
      res.redirect('/')
      return;
    }
    console.log(result)
    return res.redirect('/')
  });
});


router.get('/getUsers', function(req, res, next){
  User.find({},'userName userEmail', (error, result)=>{
    if (error) {
      console.log(error)
      res.redirect('/')
    }
    console.log(result)
    res.render('index', {items: result})
  })
})

router.post('/update', function(req, res, next){
  const id = req.body.id;
  const updateUser = {
    userName : req.body.username, 
    userEmail : req.body.userEmail, 
  }
   
  User.updateOne({_id:id, $set: updateUser}, (error, result)=>{
    if (error) {
      console.log(error)
      res.redirect('/')
    }
    console.log(result)
    res.redirect('/getUsers')
  })
})

router.post('/delete', function(req, res, next){
  const ID = req.body.id;
  User.deleteOne({_id: ID}, (error, result)=>{
      if (error) {
        console.log(error)
        res.redirect('/')
      }
      console.log(result)
      res.redirect('/getUsers')
  })

})
module.exports = router;
