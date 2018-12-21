const express = require('express');
var router = express.Router();
var products = require('../models/product')



///====================Routes for getting all the product =======================\\\

router.get('/',(req,res)=>{
    res.redirect('/products');
})

router.get('/products',(req,res)=>{
    products.find({},(err,allProduct)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('index.ejs',{products:allProduct})
        }
    })

})
//=====================================================================
router.get('/products/new',(req,res)=>{
    res.render('new.ejs')
    // res.send("Sg")
   });
///===================Routes for creating new products=============================\\\
router.post('/products',(req,res)=>{
    var name= req.body.name;
    var description = req.body.description;
    var price= req.body.price;
    console.log(name);
    
    var allProducts ={
        name:name,
        description:description,
        price:price
    }
    console.log();
    products.create(allProducts,(err, newlycreated)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(newlycreated);
            
            res.redirect('/products')
           // res.send(newlycreated);
        }
    })
});

///======================Routes for getting particular products ==============================\\\
router.get('/products/:id',(req,res)=>{
    products.findById(req.params.id,(err,product)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('show.ejs',{product:product})
            //res.send(product);
        }
    })
});


router.get('/products/:id/edit',(req,res)=>{
    products.findById(req.params.id,(err,product)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render('edit',{product:product})
            //res.send(product);
        }
    })
});
///==================================Routes for updating particular routes =========================\\
router.put('/products/:id',(req,res)=>{
    var updatedProduct ={
        name:req.body.name,
        description:req.body.description,
        price:req.body.price
    }
    products.findByIdAndUpdate(req.params.id,updatedProduct,(err,product)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/products" );
            // res.send(product);
        }
    })
});
///==================================Routes for deleating a products ======================================\\
router.delete('/products/:id',(req,res)=>{
    products.findByIdAndDelete(req.params.id);
    console.log("file deletes");
    res.redirect('/products');
    // res.send(" product deleted")
})




module.exports = router;
