const YelpController = require('../controllers/yelp.controller')

module.exports = function (app) {
    app.get('/api/:location/:term/:category/:price', YelpController.get10RestaurantsBySearchParams)
    app.get('/api/business/:id', YelpController.getRestaurantImageByID)
}