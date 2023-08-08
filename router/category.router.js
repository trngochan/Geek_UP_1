module.exports = function (router) {
  const CategoryController = require("../controller/category.controller");

  router.get("/category", CategoryController.GetAllCategory);
  router.get("/category/:id", CategoryController.GetCategoryById);
};
