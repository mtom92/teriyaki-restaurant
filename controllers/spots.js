require('dotenv').config();

let express = require('express');
let db = require('../models')
let router = express.Router();
let mbClient = require('@mapbox/mapbox-sdk');
let mbGeocode = require('@mapbox/mapbox-sdk/services/geocoding')

const mapkey = process.env.MAPBOX_KEY;
const mb = mbClient({ accessToken: mapkey})
const geocode = mbGeocode(mb)

router.get('/', (req,res)=>{
  db.spot.findAll()
  .then((spots)=>{
    res.render('spots/index',{ spots})
  })
  .catch((err)=>{
    console.log('err',err)
    res.render('404')
  })

});

router.post('/',(req,res)=>{
  console.log(req.body)
  db.spot.create(req.body)
  .then((createdSpot)=>{
    res.redirect('/spots' + createdSpot.id)
  })
  .catch((err)=>{
    console.log('error',err)
    res.render('404')
  })
});

router.get('/new', (req,res)=>{
  res.render('spots/new')
});

router.get('/:id',(req,res)=>{
  db.spot.findOne({
    where : {id: req.params.id },
    include : [ db.review ]
  })
  .then((foundSpot) =>{
    console.log("foundSpot")
    //add a latlong to res.render , reverse geocode , grab our mapbox key from .env
   geocode.forwardGeocode({ query: foundSpot.address})
     .send()
     .then(response =>{
      console.log("inresponse")
      let latLong = response.body.features[0].center
      let markerObj = {
        "type":"Feature",
        "geometry":{
          "type": "Point",
          "coordinates": latLong
        },
        "properties": {
          "title":foundSpot.name,
          "icon" : "restaurant-noodle"
        }
      }

      res.render('spots/show',{
        spot:foundSpot,
        mapkey: mapkey,
        latLong : latLong,
        marker : JSON.stringify(markerObj)
        })
      })
      .catch(err => {
        console.log(err);
      })


  })
  .catch((err)=>{
    console.log('error',err)
    res.render('404')
  })

})

module.exports = router;
