const Store = require("../model/store.model");

exports.GetAllStore = function (req, res) {
  Store.GetAllStore((result) => {
    res.send(result);
  });
};

exports.GetStoreById = function (req, res) {
  const id = req.params.id;
  Store.GetStoreById(id, (result) => {
    res.send(result);
  });
};
