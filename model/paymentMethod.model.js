const db = require("../common/connect");

const PaymentMethod = function (student) {
  this.username = student.username;
  this.password = student.password;
  this.role = student.role;
};

PaymentMethod.GetAllpaymentMethod = function (cb) {
  try {
    db.query("SELECT *  from PaymentMethod ", function (err, data) {
      if (err) {
        return cb(err);
      }
      return cb(data);
    });
  } catch (error) {
    console.log("co loi");
    return cb(error);
  }
};

PaymentMethod.GetPaymentMethodById = function (id, cb) {
  try {
    db.query(
      "SELECT *  from PaymentMethod  where Id = ?",
      [id],
      function (err, data) {
        if (err) {
          return cb(err);
        }
        return cb(data);
      }
    );
  } catch (error) {
    console.log("co loi");
    return cb(error);
  }
};

module.exports = PaymentMethod;
