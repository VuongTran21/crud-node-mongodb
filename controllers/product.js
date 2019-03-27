const Product = require('../models/product');

exports.test = (req, res) => {
    res.send('Testing');
}

exports.create = (req, res) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
    })

    product.save((err) => {
        if (err) {
            return next(err);
        }

        res.send('Product created successfully');
    })
}

exports.show = (req, res) => {
    let id = req.params.id;

    Product.findById(id, (err, product) => {
        if (err) return res.send(err);

        if (!product) return res.send('No product found.');

        return res.send(product);
    })
}

exports.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, product) => {
        if (err) return res.send(err);

        return res.send('Product updated.');
    })
}

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if (err) res.send(err);

        return res.send('Product deleted success.');
    })
}