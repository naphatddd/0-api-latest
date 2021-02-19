const Product = require("../models/product");

exports.index = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { name, desc, image, category, price } = req.body;

    const product = new Product();
    product.name = name;
    product.desc = desc;
    product.image = image;
    product.category = category;
    product.price = price;
    await product.save();
    res.status(200).json({
      message: "บันทึกข้อมูลเรียบร้อย",
    });
  } catch (error) {
    next(error);
  }
};
