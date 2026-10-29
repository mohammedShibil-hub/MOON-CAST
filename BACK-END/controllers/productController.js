const Product = require('../models/productSchema')

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

    let filter = {};

    if (category) filter.category = category;
    if (scale) filter.scale = scale;
    if (brand) filter.brand = brand;
    if (trending === "true") filter.isTrending = true;
    if (latest === "true") filter.isLatest = true;

    if (search && search.trim()) {
      const searchablefields = [
        'name',
        'description',
        'brand',
        'category',
        'scale'
      ];

      const keywords = search.trim().split(/\s+/);

      // Escape special regex characters
      const escapeRegex = (value) =>
        value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      // Every keyword must match at least one searchable field
      filter.$and = keywords.map((keyword) => {
        const regex = new RegExp(escapeRegex(keyword), "i");

        return {
          $or: searchablefields.map((field) => ({
            [field]: regex
          }))
        };
      });

    }

    let query = Product.find(filter);

    if (sort === "price-asc") query = query.sort({ price: 1 });
    if (sort === "price-desc") query = query.sort({ price: -1 });
    if (sort === "latest") query = query.sort({ createdAt: -1 });

    const Products = await query

    res.json(Products);

  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE PRODUCT
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);


  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(400).json({ message: "invalid product ID" });
  }
};