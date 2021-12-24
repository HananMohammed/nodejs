const Product = require('../models/Product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shoping_card', {useNewUrlParser: true}, (error)=>{
    if(error){
        console.log(error)
      }else{
        console.log('Connecting ...... ')
      }
    });;


const products = [
    new Product({
        imagePath: '/images/gsmarena_000.jpg',
        name : 'Huawaie y8',
        info:{
            storageCapacity : 64,
            numOfSim : 'Dual Sim',
            cameraResolutoin : 16,
            displaySize : 6.5,
        },
        price: 220
    }),

    new Product({
        imagePath: '/images/iPhone_13_Pro_Silver_Pure_Back_iPhone_13_Pro_Silver_Pure_Front_2-up_Screen__USEN_2.webp',
        name : 'iPhone 13 Pro',
        info:{
            storageCapacity : 64,
            numOfSim : 'Dual Sim',
            cameraResolutoin : 32,
            displaySize : 10.5,
        },
        price: 420
    }),  

    new Product({
        imagePath: '/images/iPhone_13_RED_Pure_Back_iPhone_13_RED_Front_2-up_Screen__USEN_1.webp',
        name : 'iPhone 13 RED_Pure_Back',
        info:{
            storageCapacity : 64,
            numOfSim : 'Dual Sim',
            cameraResolutoin : 16,
            displaySize : 8.5,
        },
        price: 330
    }),  
    new Product({
        imagePath: '/images/samsung-galaxy-zflip3-5g-noir-fantome-1200-0.webp',
        name : 'samsung galaxy',
        info:{
            storageCapacity : 64,
            numOfSim : 'Dual Sim',
            cameraResolutoin : 16,
            displaySize : 8.5,
        },
        price: 230
    }),  
    new Product({
        imagePath: '/images/z-fold3-plp.webp',
        name : 'samsung fold3 plp',
        info:{
            storageCapacity : 64,
            numOfSim : 'Dual Sim',
            cameraResolutoin : 16,
            displaySize : 8.5,
        },
        price: 530
    })
];
let done = 0;

products.forEach(product => {

    product.save((error, result)=>{
        (error) ? console.log(error) :  console.log(result);
         done ++;
         if(done === products.length){
             mongoose.disconnect()
         }
    })

});
