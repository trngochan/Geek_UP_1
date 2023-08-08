const db = require("../common/connect");

const Category = function (student) {
  this.username = student.username;
  this.password = student.password;
  this.role = student.role;
};

Category.GetAllCategory = function (cb) {
  try {
    db.query("SELECT *  from Category ", function (err, data) {
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

Category.GetCategoryById = function (id, cb) {
  try {
    db.query(
      "SELECT *  from Category  where Id = ?",
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

module.exports = Category;
