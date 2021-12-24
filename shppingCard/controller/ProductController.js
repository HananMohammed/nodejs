const Product = require('../models/Product')

let getProducts = function(req, res, next){
    Product.find({}).lean().exec((error, result)=>{
        if(error){
          console.log(error)
        } 
         res.render('index', { title: 'Shopping Card ...' , products : result });
  
      })
}

module.exports = {
    getProducts : getProducts
}