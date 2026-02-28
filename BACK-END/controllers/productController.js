const Product = require ('../models/productModel')

exports.getProducts = async (req, res) => {
    try {
        const {
            search,
            category,
            scale,
            brand,
            trending,
            sort
        } = req.query

        let filter ={};

        if (search) {
            filter.$text = {$search : search}
        }
        if (category) filter.category = category;
        if (scale) filter.scale = scale;
        if (brand) filter.brand = brand;
        if (trending === "true") filter.isTrending = true;

        let query = Product.find(filter);

        const Products = await query
        
        res.json(Products);
    } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE PRODUCT
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch {
    res.status(404).json({ message: "Product not found" });
  }
};