const Product = require("../model/product.model");

exports.GetAllProduct = function (req, res) {
  Product.GetAllProduct((result) => {
    res.send(result);
  });
};

exports.GetProductById = function (req, res) {
  const id = req.params.id;
  Product.GetProductById(id, (result) => {
    res.send(result);
  });
};

exports.GetProductByCategory = function (req, res) {
  const id = req.params.id;
  Product.GetProductByCategory(id, (result) => {
    res.send(result);
  });
};

exports.InsertProduct = function (req, res) {
  const data = req.body;
  console.log(data);

  Product.InsertProduct(data, (result) => {
    res.send(result);
  });
};
