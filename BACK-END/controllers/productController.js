const Product = require ('../models/productModel')

exports.getProducts = async (req, res) => {
    try {
        const {
            search,
            category,
            scale,
            brand,
            trending,
            sort,
            latest
        } = req.query

        let filter ={};

        if (search) {
            filter.$text = {$search : search}
        }
        if (category) filter.category = category;
        if (scale) filter.scale = scale;
        if (brand) filter.brand = brand;
        if (trending === "true") filter.isTrending = true;
        if (latest === "true") filter.isLatest = true;

        let query = Product.find(filter);

        if (sort === "price-asc") query = query.sort({ price: 1 });
        if (sort === "price-desc") query = query.sort({ price: -1 });
        if (sort === "latest") query = query.sort({ createdAt: -1 });

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

    if(!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "invalid product ID" });
  }
};