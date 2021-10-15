const {Author} = require('../models/authors.model');
module.exports.index = (request, response) => {
    
    Author.find()
        .then(authors => response.json(authors))
}

module.exports.createAuthor = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err=>response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateAuthor => response.json(this.updateAuthor))
        .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(this.deleteConfirmation))
        .catch(err => response.json(err))
}