const Category = require("../model/category.model");

exports.GetAllCategory = function (req, res) {
  Category.GetAllCategory((result) => {
    res.send(result);
  });
};

exports.GetCategoryById = function (req, res) {
  const id = req.params.id;
  Category.GetCategoryById(id, (result) => {
    res.send(result);
  });
};
