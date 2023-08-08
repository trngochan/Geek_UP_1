const db = require("../common/connect");

const Store = function (student) {
  this.username = student.username;
  this.password = student.password;
  this.role = student.role;
};

Store.GetAllStore = function (cb) {
  try {
    db.query("SELECT *  from Store ", function (err, data) {
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

Store.GetStoreById = function (id, cb) {
  try {
    db.query("SELECT *  from Store  where Id = ?", [id], function (err, data) {
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

module.exports = Store;
