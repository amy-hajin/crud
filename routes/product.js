var { query } = require("express");
var express = require("express");
var connection = require("../connection");
var router = express.Router();

router.post("/create", (req, res) => {
  let product = req.body;
  query = "insert into product (name, description, price) value(?, ?, ?)";
  connection.query(
    query,
    [product.name, product.description, product.price],
    (err, results) => {
      if (!err) {
        return res.status(200).json({ message: "Product Added Successfully" });
      } else return res.status(500).json(err);
    }
  );
});

router.get("/read", (req, res) => {
  var query = "select * from product";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});

router.patch("/update/:id", (req, res) => {
  const id = req.params.id;
  let product = req.body;
  var query = "update product set name=?, description=?, price=? where id =?";
  connection.query(
    query,
    [product.name, product.description, product.price, id],
    (err, results) => {
      if (!err) {
        if (results.affectedRows == 0) {
          return res.status(404).json({ message: "Product id does not found" });
        }
        return res
          .status(200)
          .json({ message: "Product Updated Successfully" });
      } else {
        return res.status(500).json(err);
      }
    }
  );
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  var query = "delete from product where id=?";
  connection.query(query, [id], (err, results) => {
    if (!err) {
      if (results.affectedRows == 0) {
        return res.status(404).json({ message: "Product id does not found" });
      }
      return res.status(200).json({ message: "Product Delete Successfully" });
    } else {
      return res.status(500).json(err);
    }
  });
});
module.exports = router;
