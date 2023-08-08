var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "bkn0wxu75uq2kaikrrak-mysql.services.clever-cloud.com",
  user: "utdnltmbmvrkpitw",
  password: "YSU2ZKrNQD1Oj0ZG177L",
  database: "bkn0wxu75uq2kaikrrak",
});

connection.connect(function (err) {
  if (err) console.error("ket noi k thanh cong");
});

module.exports = connection;
