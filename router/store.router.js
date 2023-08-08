module.exports = function (router) {
  const StoreController = require("../controller/store.controller");

  router.get("/store", StoreController.GetAllStore);
  router.get("/store/:id", StoreController.GetStoreById);
};
