const express = require("express");
const router = express.Router();
const { listItems } = require("../controlers/controler");
const { findById } = require("../controlers/controler");
const { addItem } = require("../controlers/controler");
const { updateItem } = require("../controlers/controler");
const { subItem } = require("../controlers/controler");
const { addQuantity } = require("../controlers/controler");
//
//
//
router.get("/data", listItems);
router.get("/:id", findById);
router.post("/add", addItem);
router.put("/update", updateItem);
router.delete("/:id", subItem);
router.put("/:id", addQuantity);
//
//
//
module.exports.router = router;
