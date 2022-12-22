const express = require('express')
const router = express.Router()
const product = require('../models/product.js')

//Getting Home page
router.get("/", (req, res) => {
    res.render('home')
  })
// Index which is used to display my lists
router.get("/product", (req, res) => {
    product.find({}, (error, allproduct) => {
         res.status(200).render("Index", {
            product: allproduct
       })  
    })
  })

//New route to show new to be added in the broweser

router.get('/product/new', (req,res)=>{
    res.render('new')
})

// Delete - Delete this one record
router.delete('/product/:id', (req, res)=>{
    product.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/product');//redirect back to books index
    });
  });
  
  // Update - Modifying a record
  
  router.put('/product/:id', (req, res)=>{
    
    product.findByIdAndUpdate(req.params.id, req.body, (err, updatedproduct)=>{
       console.log(updatedproduct)
        res.redirect(`/product/${req.params.id}`); // redirecting to the Show page
    });
  });
  
  //Create -initiates a post request through a form submission with action = http://localhost:3000/products/and allows the application the ability to Createa product
  router.post("/product", (req, res) => {
      product.create(req.body, (error, createdproduct) => {
          if(!error) {
              res.status(200).redirect("/product")
          } else {
              res.status(400).send(error)
          }
      })
    })
    
  // Edit - browser shows the user a form to edit a product

  router.get('/product/:id/edit', (req, res)=>{
  product.findById(req.params.id, (err, foundproduct)=>{ //find the product
    if(!err){
      res.render(
        'Edit',
      {
        product: foundproduct //pass in the found product so we can prefill the form
      }
    );
  } else {
    res.send({ msg: err.message })
  }
  })
})

  
  
  // Show -shows the user an Individual product in the browser
  router.get("/product/:indexOfproductArray", function (req, res) {
    product.findById(req.params.indexOfproductArray, (err, foundproduct) => {
      res.render("Show", {
        product: foundproduct,
      });
    });
  });
  
  // buy
  router.put("/product/buy/:indexOfproductArray", function (req, res) {
    product.findById(req.params.indexOfproductArray, (err, foundproduct) => {
     let item =foundproduct
     item.Qtity =item.Qtity-1
     product.findByIdAndUpdate(req.params.indexOfproductArray, item, (err, foundproduct) => {
      res.redirect(`/product/${req.params.indexOfproductArray}`)
     })
     
    });
  });


module.exports = router