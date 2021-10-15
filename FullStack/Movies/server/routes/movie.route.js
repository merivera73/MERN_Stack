const MovieController = require('../controllers/movie.controller');

module.exports = app => {
    app.post('/api/movies', MovieController.create);
    app.get('/api/movies', MovieController.getAll);
    app.get('/api/movies/:id', MovieController.getOne);
    app.delete('/api/movies/:id', MovieController.delete);
    app.put('/api/movies/:id', MovieController.update);
    app.put('/api/movies/:id/reviews', MovieController.createReview);
}