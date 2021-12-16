const User = require('../models/user')


getUsers = function(req, res, next){
    User.find({},'userName userEmail', (error, result)=>{
        if (error) {
          console.log(error)
          res.redirect('/')
        }
        console.log(result)
        res.render('index', {items: result})
    })
}

 
insertUsers = function (req, res, next) {

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
  }

  updateUser = function(req, res, next){
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
  }

  deleteUSer = function(req, res, next){
    const ID = req.body.id;
    User.deleteOne({_id: ID}, (error, result)=>{
        if (error) {
          console.log(error)
          res.redirect('/')
        }
        console.log(result)
        res.redirect('/getUsers')
    })
  
  }

module.exports = {
    insertUsers : insertUsers,
    getUsers    : getUsers,
    updateUser  : updateUser,
    deleteUSer  : deleteUSer
}