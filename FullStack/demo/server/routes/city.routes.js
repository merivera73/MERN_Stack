const CityController = require('../controllers/city.controller');


module.exports = app => {

    app.post('/api/cities', CityController.create);
    
    app.get('/api/cities', CityController.getAll);
    
    app.get('/api/cities/:id', CityController.getOne);
    
    app.delete('/api/cities/:id', CityController.delete);
    
    app.put('/api/cities/:id', CityController.update);
}




