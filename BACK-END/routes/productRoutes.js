const express = require('express');
const router = express.Router();
const product = require("../models/productSchema")

const {
  getProducts,
  getProductById
} = require('../controllers/productController');

router.get("/", getProducts);
router.get("/:id", getProductById);


router.get("/similar", async (req, res) => {
  try {
    const { brand, category, exclude } = req.query;

    let filter = {
      _id: { $ne: exclude }
    };

    if (brand) filter.brand = brand;
    if (category) filter.category = category;

    const products = await Product.find(filter).limit(6);

    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;