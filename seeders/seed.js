let db = require('../models')

db.spot.create({
  name:'Joy Bento',
  image:'https://s3-media3.fl.yelpcdn.com/bphoto/BI4NRaZFUGZGQWkw-gxdMw/o.jpg',
  address:'214 Madison St, Seattle, WA 98104',
  neighborhood: 'Downtown',
  rating: 4.2,
  special: 'chicken teriyaki',
  sunday: false,
  price: 2,
  description: 'Do you love to eat out of a parking garage? Have we got the spot for you '

})
.then((createdSpot) =>{
  console.log('Created Joy Bento');
})

db.spot.create({
  name:'Samurai Kitchen',
  image:'https://lakeunioninseattle.com/wp-content/uploads/2013/06/FlyingFish1.jpg',
  address:'Republicans St, Seattle, WA 98104',
  neighborhood: 'Queen Ann',
  rating: 4.8,
  special: 'super teriyaki',
  sunday: false,
  price: 3,
  description: 'If you love the spicy food and a great view this is the place for you '

})
.then((created) =>{
  console.log('Created Samurai');
})

db.spot.create({
  name:'Teinei',
  image:'https://s3-media1.fl.yelpcdn.com/bphoto/wgA3bIdR0si76BIDu1N81Q/ls.jpg',
  address:'Boren Av, Seattle, WA 98109',
  neighborhood: 'South Lake Union',
  rating: 4.3,
  special: 'kimchi teriyaki',
  sunday: false,
  price: 2,
  description: 'A great place in the middle of all the offices'

})
.then((created) =>{
  console.log('Created Teinei');
})


db.spot.create({
  name:'Moshi moshi',
  image:'https://media-cdn.tripadvisor.com/media/photo-s/0b/ef/63/c3/drinks-at-little-fish.jpg',
  address:'Westlake Av, Seattle, WA 98103',
  neighborhood: 'Downtown',
  rating: 4.0,
  special: 'pork teriyaki',
  sunday: false,
  price: 2,
  description: 'With a lot of options to choose'

})
.then((created) =>{
  console.log('Created Teinei');
  process.exit()
})
