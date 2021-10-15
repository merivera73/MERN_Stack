const {Product} = require('../models/product.manager.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Products are up and running now"
    })
}

module.exports.createProduct = (request, response) => {
    const {productName, productPrice, productDescription} = request.body;
    Product.create({
        productName,
        productPrice,
        productDescription
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProduct = (request, response) => {
    Product.find({})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateProduct => response.json(this.updateProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(this.deleteConfirmation))
        .catch(err => response.json(err))
}
