const express = require("express");
const app = express();
const port = 3000;
const db = require("./common/connect");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

require("./router/product.router")(app);
require("./router/paymentMethod.router")(app);
require("./router/category.router")(app);
require("./router/store.router")(app);

// Đặt hàng
app.post("/order", (req, res) => {
  const { userId, Date, orderItems, paymentMethodId } = req.body;

  //Insert information vào bảng Order
  db.query(
    "INSERT INTO Order (UserId, Date) VALUES ( ?, ?)",
    [userId, Date],
    (error, result) => {
      if (error) throw error;

      const order_id = result.insertId;

      // Insert OrderPayment
      db.query(
        "INSERT INTO OrderPayment (OrderId, PaymentMethodId) VALUES ( ?, ?)",
        [order_id, paymentMethodId],
        (error, result) => {
          if (error) throw error;
        }
      );

      //Insert từng Product vào orderItem
      orderItems.forEach((item) => {
        db.query(
          "INSERT INTO OrderItem (OrderId,ProductId, Quantity) VALUES (?, ?, ?)",
          [order_id, item.productId, item.quantity],
          (error, result) => {
            if (error) throw error;
          }
        );
      });

      res.status(201).json({ message: "Order created successfully" });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
