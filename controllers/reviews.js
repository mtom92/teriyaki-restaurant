let express = require('express');
let db = require('../models');
let router = express.Router();

router.post('/',(req,res) => {
  //res.send(req.body)
    db.review.create(req.body)
     .then((createdReview) =>{
    res.redirect('/spots/' + req.body.spotId)
  })
  .catch((err)=>{
    console.log('error in post review', err)
    res.render('404')
     })
  })


module.exports = router
