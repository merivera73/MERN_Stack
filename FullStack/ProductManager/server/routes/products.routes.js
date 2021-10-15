const ProductsController = require('../controllers/products.controller');
module.exports = function(app){
    app.get('/api', ProductsController.index);
    app.post('/api/newProduct', ProductsController.createProduct);
    app.get('/api/products', ProductsController.getAllProduct);
    app.get('/api/product/:id', ProductsController.getProduct);
    app.put('/api/product/:id', ProductsController.updateProduct);
    app.delete('/api/product/:id', ProductsController.deleteProduct);
}