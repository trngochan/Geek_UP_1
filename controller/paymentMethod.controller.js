const PaymentMethod = require("../model/paymentMethod.model");

exports.GetAllpaymentMethod = function (req, res) {
  PaymentMethod.GetAllpaymentMethod((result) => {
    res.send(result);
  });
};

exports.GetpaymentMethodById = function (req, res) {
  const id = req.params.id;
  PaymentMethod.GetPaymentMethodById(id, (result) => {
    res.send(result);
  });
};
