module.exports = function (router) {
  const ProductController = require("../controller/product.controller");

  router.get("/product", ProductController.GetAllProduct);
  router.get("/product/:id", ProductController.GetProductById);
  router.get("/product/:id/category", ProductController.GetProductByCategory);
  router.post("/product", ProductController.InsertProduct);
};
