const AuthorsController = require('../controllers/authors.controller');
module.exports = function(app) {
    app.get('/api', AuthorsController.index);
    app.post('/api/newAuthors', AuthorsController.createAuthor);
    app.get('/api/authors', AuthorsController.getAllAuthors);
    app.get('/api/author/:id', AuthorsController.getAuthor);
    app.put('/api/author/:id', AuthorsController.updateAuthor);
    app.delete('/api/author/:id', AuthorsController.deleteAuthor);
}