const Product = require('../models/productModel');

require('./mainController');

exports.addproduct = async (req, res, next) => {
    try {
        const { product_name, price, category } = req.body
        const newProduct = new Product({ product_name, price, category });
        await newProduct.save();
        res.json({
            data: newProduct
        })
    } catch (error) {
        next(error)
    }
}

exports.getproducts = async (req, res, next) => {
    try {
        let result = await Product.find();
        //res.send(result);
        res.json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}

exports.searchproduct = async (req, res, next) => {
    try {
        let result = await Product.find({
            "$or": [
                { product_name: { $regex: req.params.key } },
                { category: { $regex: req.params.key } },
                { price: { $regex: req.params.key } }
            ]
        });

        res.json({
            data: result
        })
    } catch (error) {
        next(error)
    }
}