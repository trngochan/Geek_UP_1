module.exports = function (router) {
  const paymentMethodtController = require("../controller/paymentMethod.controller");

  router.get("/paymentmethod", paymentMethodtController.GetAllpaymentMethod);
  router.get(
    "/paymentmethod/:id",
    paymentMethodtController.GetpaymentMethodById
  );
};
