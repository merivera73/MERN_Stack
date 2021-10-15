const RestaurantController = require('../controllers/restaurant.controller');

module.exports = app => {
    app.post('/api/restaurants', RestaurantController.create);
    app.get('/api/restaurants', RestaurantController.getAll);
    app.get('/api/restaurants/:id', RestaurantController.getOne);
    app.delete('/api/restaurants/:id', RestaurantController.delete);
    app.put('/api/restaurants/:id', RestaurantController.update);
    app.put('/api/restaurants/:id/reviews', RestaurantController.createReview);
}