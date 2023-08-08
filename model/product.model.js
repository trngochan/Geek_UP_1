const db = require("../common/connect");

const Product = function (student) {
  this.username = student.username;
  this.password = student.password;
  this.role = student.role;
};

Product.GetAllProduct = function (cb) {
  try {
    db.query("SELECT *  from Product ", function (err, data) {
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

Product.GetProductById = function (id, cb) {
  try {
    db.query(
      "SELECT *  from Product  where Id = ?",
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

Product.GetProductByCategory = function (id, cb) {
  try {
    db.query(
      "SELECT * from Product WHERE Product.CategoryId = ? ",
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

Product.InsertProduct = function (data, cb) {
  try {
    db.query(
      "INSERT INTO `Product`(`Name`, `CategoryId`, `Price`) VALUES (?, ?, ?) ",
      [data.name, data.categoryId, data.price],
      function (err, data) {
        if (err) {
          return cb(err);
        }
        return cb("Insert successfully");
      }
    );
  } catch (error) {
    return cb(error);
  }
};
module.exports = Product;
